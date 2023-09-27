using Microsoft.AspNetCore.Mvc;
using WebAPIProyectoGlobales.Models;

namespace WebAPIProyectoGlobales.Controllers;

[ApiController]
[Route("[controller]")]
public class EtiquetaController : ControllerBase
{

    private readonly ILogger<EtiquetaController> _logger;

    public EtiquetaController(ILogger<EtiquetaController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var etiquetas = context.Etiqueta.ToList();
            return Ok(etiquetas);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener las etiquetas: {ex.Message}");
            return StatusCode(500);
        }
    }



    [HttpGet("{idEtiqueta}")]
    public IActionResult GetById(int idEtiqueta)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var etiqueta = context.Etiqueta.FirstOrDefault(x => x.IdEtiqueta == idEtiqueta);
            if (etiqueta == null)
            {
                return NotFound($"No existen etiquetas con el ID: {idEtiqueta}:");
            }
            return Ok(etiqueta);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los datos de la etiqueta con el ID {idEtiqueta}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPost]
    public IActionResult Create([FromBody] Etiqueta etiqueta)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ProyectoglobalesContext();
            context.Etiqueta.Add(etiqueta);
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al crear la etiqueta: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, [FromBody] Etiqueta etiqueta)
    {
        try
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var context = new ProyectoglobalesContext();
            var EtiquetaUpdate = context.Etiqueta.FirstOrDefault(x => x.IdEtiqueta == id);
            if (EtiquetaUpdate == null)
            {
                return NotFound($"No existen etiquetas con el ID: {id}:");
            }
            
            EtiquetaUpdate.IdEtiqueta = etiqueta.IdEtiqueta;
            EtiquetaUpdate.Nombre = etiqueta.Nombre;
            
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al actualizar los datos de la etiqueta con el id {id}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var etiqueta = context.Etiqueta.FirstOrDefault(x => x.IdEtiqueta == id);
            if (etiqueta == null)
            {
                return NotFound();
            }
            context.Etiqueta.Remove(etiqueta);
            context.SaveChanges();
            return Ok();
        }
        catch
        {
            _logger.LogError($"Error al eliminar los datos de la etiqueta con id: {id}");
            return StatusCode(500);
        }
    }
}
