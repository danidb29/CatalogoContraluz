using System;
using System.Collections.Generic;

namespace WebAPIProyectoGlobales.Models;

public partial class ProductoInsercion
{
    public int IdProducto { get; set; }

    public string? Nombre { get; set; }

    public string? Codigo { get; set; }

    public decimal? Precio { get; set; }

    public List<string> Etiquetas { get; set; } = new List<string>();
 

}
