using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using PetStoreCore.Server;

namespace PetStoreCore.Server.Migrations
{
    [DbContext(typeof(PetStoreContext))]
    [Migration("20170407060335_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PetStoreCore.Server.Models.Animal", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Animals");
                });

            modelBuilder.Entity("PetStoreCore.Server.Models.Breed", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<long?>("AnimalId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("AnimalId");

                    b.ToTable("Breeds");
                });

            modelBuilder.Entity("PetStoreCore.Server.Models.Pet", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("Birthday");

                    b.Property<long?>("BreedId");

                    b.Property<string>("ImageUrl");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("BreedId");

                    b.ToTable("Pets");
                });

            modelBuilder.Entity("PetStoreCore.Server.Models.Breed", b =>
                {
                    b.HasOne("PetStoreCore.Server.Models.Animal", "Animal")
                        .WithMany()
                        .HasForeignKey("AnimalId");
                });

            modelBuilder.Entity("PetStoreCore.Server.Models.Pet", b =>
                {
                    b.HasOne("PetStoreCore.Server.Models.Breed", "Breed")
                        .WithMany()
                        .HasForeignKey("BreedId");
                });
        }
    }
}
