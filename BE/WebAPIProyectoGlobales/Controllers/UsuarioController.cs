using Microsoft.AspNetCore.Mvc;
using WebAPIProyectoGlobales.Models;

namespace WebAPIProyectoGlobales.Controllers;

[ApiController]
[Route("[controller]")]

public class UsuarioController : ControllerBase
{
    private readonly ILogger<UsuarioController> _logger;

    public UsuarioController(ILogger<UsuarioController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var usuarios = context.Usuarios.ToList();
            return Ok(usuarios);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los usuarios: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpGet("{idUsuario}")]
    public IActionResult GetById(int idUsuario)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var usuario = context.Usuarios.FirstOrDefault(x => x.IdUsuario == idUsuario);
            if (usuario == null)
            {
                return NotFound($"No existen usuarios con el ID: {idUsuario}:");
            }
            return Ok(usuario);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al obtener los datos del usuario con el ID {idUsuario}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPost]
    public IActionResult Create([FromBody] Usuario usuario)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            context.Usuarios.Add(usuario);
            context.SaveChanges();
            return Ok(usuario);
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al crear el usuario: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpPut("{idUsuario}")]
    public IActionResult Update(int idUsuario, [FromBody] Usuario usuario)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var usuarioExistente = context.Usuarios.FirstOrDefault(x => x.IdUsuario == idUsuario);
            if (usuarioExistente == null)
            {
                return NotFound($"No existen usuarios con el ID: {idUsuario}:");
            }

            usuarioExistente.IdUsuario = usuario.IdUsuario;
            usuarioExistente.Nombre = usuario.Nombre;
            usuarioExistente.Cedula = usuario.Cedula;
            usuarioExistente.Rol = usuario.Rol;

            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al actualizar el usuario con el ID {idUsuario}: {ex.Message}");
            return StatusCode(500);
        }
    }

    [HttpDelete("{idUsuario}")]
    public IActionResult Delete(int idUsuario)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var usuario = context.Usuarios.FirstOrDefault(x => x.IdUsuario == idUsuario);
            if (usuario == null)
            {
                return NotFound($"No existen usuarios con el ID: {idUsuario}:");
            }

            context.Usuarios.Remove(usuario);
            context.SaveChanges();
            return Ok();
        }
        catch (Exception ex)
        {
            _logger.LogError($"Error al eliminar el usuario con el ID {idUsuario}: {ex.Message}");
            return StatusCode(500);
        }
    }

    //LOGIN
    [HttpPost, Route("[action]", Name = "Login")]
    public ActionResult Login([FromBody] Usuario Usuario)
    {
        try
        {
            var context = new ProyectoglobalesContext();
            var usuario = context.Usuarios.FirstOrDefault(x => x.Correo == Usuario.Correo && x.Password == Usuario.Password);
            if (usuario != null)
            {
                return Ok(usuario.Correo);
            }
            else
            {
                return Unauthorized();
            }
        }
        catch  (Exception ex)
        {    
            _logger.LogError($"Error al autenticar el usuario: {ex.Message}");
            return StatusCode(500);
        }
        
    }
}