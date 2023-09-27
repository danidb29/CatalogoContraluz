using Microsoft.AspNetCore.Mvc;
using WebAPIProyectoGlobales.Models;

namespace WebAPIProyectoGlobales.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductoEtiquetaController : ControllerBase
{

    private readonly ILogger<ProductoEtiquetaController> _logger;

    public ProductoEtiquetaController(ILogger<ProductoEtiquetaController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var productoEtiquetas = context.ProductoEtiqueta.ToList();
            return Ok(productoEtiquetas);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los los productos con sus etiquetas: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpGet("{idProductoEtiqueta}")]
    public IActionResult GetById(int idProductoEtiqueta)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var productoEtiqueta = context.ProductoEtiqueta.FirstOrDefault(x => x.IdProductoEtiqueta == idProductoEtiqueta);
            if (productoEtiqueta == null)
            {
                return NotFound($"No existen productos-etiquetas con el ID: {idProductoEtiqueta}:");
            }
            return Ok(productoEtiqueta);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los datos del producto con el ID {idProductoEtiqueta}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPost]
    public IActionResult Create([FromBody] ProductoEtiqueta productoEtiqueta)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            context.ProductoEtiqueta.Add(productoEtiqueta);
            context.SaveChanges();
            return Ok(productoEtiqueta);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al crear el producto-etiqueta: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPut("{idProductoEtiqueta}")]
    public IActionResult Update(int idProductoEtiqueta, [FromBody] ProductoEtiqueta productoEtiqueta)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var productoEtiquetaToUpdate = context.ProductoEtiqueta.FirstOrDefault(x => x.IdProductoEtiqueta == idProductoEtiqueta);
            if (productoEtiquetaToUpdate == null)
            {
                return NotFound($"No existen productos-etiquetas con el ID: {idProductoEtiqueta}:");
            }
            productoEtiquetaToUpdate.IdProducto = productoEtiqueta.IdProducto;
            productoEtiquetaToUpdate.IdEtiqueta = productoEtiqueta.IdEtiqueta;
            context.SaveChanges();
            return Ok(productoEtiquetaToUpdate);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al actualizar el producto-etiqueta: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpDelete("{idProductoEtiqueta}")]
    public IActionResult Delete(int idProductoEtiqueta)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var productoEtiquetaToDelete = context.ProductoEtiqueta.FirstOrDefault(x => x.IdProductoEtiqueta == idProductoEtiqueta);
            if (productoEtiquetaToDelete == null)
            {
                return NotFound($"No existen productos-etiquetas con el ID: {idProductoEtiqueta}:");
            }
            context.ProductoEtiqueta.Remove(productoEtiquetaToDelete);
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al eliminar el producto-etiqueta: {ex.Message}");
            return StatusCode(500);
        }
    }















    
}
