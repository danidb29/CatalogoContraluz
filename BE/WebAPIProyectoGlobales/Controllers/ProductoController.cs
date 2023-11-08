using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPIProyectoGlobales.Models;

namespace WebAPIProyectoGlobales.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductoController : ControllerBase
{

    private readonly ILogger<ProductoController> _logger;

    public ProductoController(ILogger<ProductoController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var productos = context.Productos
                .Include(p => p.ProductoEtiqueta)
                    .ThenInclude(pe => pe.IdEtiquetaNavigation)
                .ToList();

            // Crear una proyección de productos que incluye solo los nombres de las etiquetas
            var productosConEtiquetas = productos.Select(producto => new
            {
                IdProducto = producto.IdProducto,
                Descripcion = producto.Descripcion,
                Codigo = producto.Codigo,
                Precio = producto.Precio,
                Etiquetas = producto.ProductoEtiqueta.Select(pe => pe.IdEtiquetaNavigation.Nombre).ToList()
            }).ToList();

            return Ok(productosConEtiquetas);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los productos: {ex.Message}");
            return StatusCode(500);
        }
    }



    [HttpGet("{idProducto}")]
    public IActionResult GetById(int idProducto)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var producto = context.Productos
                .Include(p => p.ProductoEtiqueta)
                    .ThenInclude(pe => pe.IdEtiquetaNavigation)
                .FirstOrDefault(x => x.IdProducto == idProducto);
                
            if (producto == null)
            {
                return NotFound($"No existen productos con el ID: {idProducto}:");
            }

            var productoConEtiquetas = new
            {
                IdProducto = producto.IdProducto,
                Descripcion = producto.Descripcion,
                Codigo = producto.Codigo,
                Precio = producto.Precio,
                Etiquetas = producto.ProductoEtiqueta.Select(pe => pe.IdEtiquetaNavigation.Nombre).ToList()
            };

            return Ok(productoConEtiquetas);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los datos del producto con el ID {idProducto}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPost]
    public IActionResult Create([FromBody] Producto producto)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ProyectoglobalesContext();
            context.Productos.Add(producto);
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al crear el producto: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPost("InsertarProducto")]
    public IActionResult CreateProductoEtiqueta([FromBody] ProductoInsercion productoInsercion)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ProyectoglobalesContext();

            Producto producto = new Producto();
            producto.Descripcion = productoInsercion.Nombre;
            producto.Codigo = productoInsercion.Codigo;
            producto.Precio = productoInsercion.Precio;

            context.Productos.Add(producto);
            context.SaveChanges();

            int idGenerado = producto.IdProducto;

            //Revisar las etiquetas e insertarlas en la tabla de Etiquetas si no existen para luego insertarlas como ProductoEtiqueta
            foreach (var etiqueta in productoInsercion.Etiquetas)
            {
                var etiquetaExistente = context.Etiqueta.FirstOrDefault(x => x.Nombre == etiqueta);
                if (etiquetaExistente == null)
                {
                    Etiqueta etiquetaNueva = new Etiqueta();
                    etiquetaNueva.Nombre = etiqueta;
                    context.Etiqueta.Add(etiquetaNueva);
                    context.SaveChanges();
                }
            }

            //Insertar las etiquetas en la tabla de ProductoEtiqueta
            foreach (var etiqueta in productoInsercion.Etiquetas)
            {
                var etiquetaExistente = context.Etiqueta.FirstOrDefault(x => x.Nombre == etiqueta);
                ProductoEtiqueta productoEtiqueta = new ProductoEtiqueta();
                productoEtiqueta.IdEtiqueta = etiquetaExistente.IdEtiqueta;
                productoEtiqueta.IdProducto = idGenerado;
                context.ProductoEtiqueta.Add(productoEtiqueta);
                context.SaveChanges();
            }
            return Ok(new {Id = idGenerado});
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al crear el producto: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Producto producto)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ProyectoglobalesContext();
            var ProductoUpdate = context.Productos.FirstOrDefault(x => x.IdProducto == id);
            if (ProductoUpdate == null)
            {
                return NotFound($"No existen productos con el ID: {id}:");
            }
            
            ProductoUpdate.IdProducto = producto.IdProducto;
            ProductoUpdate.Descripcion = producto.Descripcion;
            ProductoUpdate.Codigo = producto.Codigo;
            ProductoUpdate.Precio = producto.Precio;
            
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al actualizar los datos del producto con el id {id}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            var context = new ProyectoglobalesContext();

            //Eliminar ProductoEtiquetas antes
            var productoEtiquetas = context.ProductoEtiqueta.Where(x => x.IdProducto == id);
            foreach (var productoEtiqueta in productoEtiquetas)
            {
                context.ProductoEtiqueta.Remove(productoEtiqueta);
            }
            context.SaveChanges();

            //Eliminar Producto
            var producto = context.Productos.FirstOrDefault(x => x.IdProducto == id);
            if (producto == null)
            {
                return NotFound();
            }
            context.Productos.Remove(producto);
            context.SaveChanges();
            return Ok();
        }
        catch
        {
            _logger.LogError($"Error al eliminar los datos del producto con id: {id}");
            return StatusCode(500);
        }
    }

    [HttpPost("BuscarProductos")]
    public IActionResult BuscarProductos([FromBody] Busqueda busqueda)
    {
        //Busqueda en productos y etiquetas de acuerdo con las palabras clave
        try
        {
            var context = new ProyectoglobalesContext();

            var productosEnDescripcion = context.Productos
                .ToList() // Trae todos los productos a la memoria
                .Where(p => busqueda.palabrasClave.Any(keyword => p.Descripcion.ToLower().Contains(keyword.ToLower())))
                .ToList();

            var productosEnEtiquetas = context.Productos
                .Where(p => p.ProductoEtiqueta
                    .Any(pe => busqueda.palabrasClave.Contains(pe.IdEtiquetaNavigation.Nombre.ToLower())))
                .ToList();

            var resultados = productosEnDescripcion.Union(productosEnEtiquetas).Distinct().ToList();


            return Ok(resultados);
            
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al buscar productos: {ex.Message}");
            return StatusCode(500);
        }

    }
}
