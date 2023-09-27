using Microsoft.AspNetCore.Mvc;
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
            var productos = context.Productos.ToList();
            return Ok(productos);
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
            var producto = context.Productos.FirstOrDefault(x => x.IdProducto == idProducto);
            if (producto == null)
            {
                return NotFound($"No existen productos con el ID: {idProducto}:");
            }
            return Ok(producto);
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
}
