using System;
using System.Collections.Generic;

namespace WebAPIProyectoGlobales.Models;

public partial class Etiqueta
{
    public int IdEtiqueta { get; set; }

    public string? Nombre { get; set; }

    public virtual ICollection<ProductoEtiqueta> ProductoEtiqueta { get; set; } = new List<ProductoEtiqueta>();
}
