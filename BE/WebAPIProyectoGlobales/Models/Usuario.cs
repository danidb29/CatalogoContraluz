using System;
using System.Collections.Generic;

namespace WebAPIProyectoGlobales.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string? Cedula { get; set; }

    public string? Password { get; set; }

    public string? Nombre { get; set; }

    public string? Correo { get; set; }

    public string? Rol { get; set; }
}
