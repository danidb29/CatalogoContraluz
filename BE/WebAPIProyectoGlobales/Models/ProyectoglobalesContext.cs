using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebAPIProyectoGlobales.Models;

public partial class ProyectoglobalesContext : DbContext
{
    public ProyectoglobalesContext()
    {
    }

    public ProyectoglobalesContext(DbContextOptions<ProyectoglobalesContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Etiqueta> Etiqueta { get; set; }

    public virtual DbSet<Producto> Productos { get; set; }

    public virtual DbSet<ProductoEtiqueta> ProductoEtiqueta { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=proyectoglobales-2023.database.windows.net;Database=proyectoglobales;User Id=proyectoglobalesadminuser;Password=ProyectoGlobales2023!;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Etiqueta>(entity =>
        {
            entity.HasKey(e => e.IdEtiqueta).HasName("PK__Etiqueta__3C1526A7C719F95E");

            entity.Property(e => e.IdEtiqueta).HasColumnName("idEtiqueta");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Producto>(entity =>
        {
            entity.HasKey(e => e.IdProducto).HasName("PK__Producto__07F4A132870A9210");

            entity.ToTable("Producto");

            entity.Property(e => e.IdProducto).HasColumnName("idProducto");
            entity.Property(e => e.Codigo)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("codigo");
            entity.Property(e => e.Descripcion)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("descripcion");
            entity.Property(e => e.Precio)
                .HasColumnType("decimal(10, 2)")
                .HasColumnName("precio");
        });

        modelBuilder.Entity<ProductoEtiqueta>(entity =>
        {
            entity.HasKey(e => e.IdProductoEtiqueta).HasName("PK__Producto__CDECE8D7BB4E642E");

            entity.Property(e => e.IdProductoEtiqueta).HasColumnName("idProductoEtiqueta");
            entity.Property(e => e.IdEtiqueta).HasColumnName("idEtiqueta");
            entity.Property(e => e.IdProducto).HasColumnName("idProducto");

            entity.HasOne(d => d.IdEtiquetaNavigation).WithMany(p => p.ProductoEtiqueta)
                .HasForeignKey(d => d.IdEtiqueta)
                .HasConstraintName("FK__ProductoE__idEti__76969D2E");

            entity.HasOne(d => d.IdProductoNavigation).WithMany(p => p.ProductoEtiqueta)
                .HasForeignKey(d => d.IdProducto)
                .HasConstraintName("FK__ProductoE__idPro__75A278F5");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__645723A6F4F36B3F");

            entity.ToTable("Usuario");

            entity.Property(e => e.IdUsuario).HasColumnName("idUsuario");
            entity.Property(e => e.Cedula)
                .HasMaxLength(30)
                .IsUnicode(false)
                .HasColumnName("cedula");
            entity.Property(e => e.Correo)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("correo");
            entity.Property(e => e.Nombre)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("nombre");
            entity.Property(e => e.Password)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Rol)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("rol");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
