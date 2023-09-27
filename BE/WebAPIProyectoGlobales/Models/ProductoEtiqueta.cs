using System;
using System.Collections.Generic;

namespace WebAPIProyectoGlobales.Models;

public partial class ProductoEtiqueta
{
    public int IdProductoEtiqueta { get; set; }

    public int? IdProducto { get; set; }

    public int? IdEtiqueta { get; set; }

    public virtual Etiqueta? IdEtiquetaNavigation { get; set; }

    public virtual Producto? IdProductoNavigation { get; set; }
}
