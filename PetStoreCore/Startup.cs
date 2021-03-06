﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using PetStoreCore.Server;
using PetStoreCore.Server.Services;
using Microsoft.EntityFrameworkCore;

namespace PetStoreCore
{
    public class Startup
    {
    private const string DB_USERNAME = "commander";
    private const string DB_PASSWORD = "Cobra1234";
    private static readonly string PET_DB_CONNECTION_STRING = $"Server=tcp:chucknorrisdev.database.windows.net,1433;Initial Catalog=petstoredb;Persist Security Info=False;User ID={DB_USERNAME};Password={DB_PASSWORD};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    public void ConfigureServices(IServiceCollection services) {
          services.AddMvc();
        services.AddDbContext<PetStoreContext>(options => options.UseSqlServer(PET_DB_CONNECTION_STRING));
        services.AddScoped<PetService>();
        services.AddScoped<BreedService>();
        services.AddScoped<AnimalService>();
    }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(cors => cors.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.Use(async (context, next) =>
            {
              await next();

              if (context.Response.StatusCode == 404 &&
                  !Path.HasExtension(context.Request.Path.Value) &&
                  !context.Request.Path.Value.StartsWith("/api/")) {
                context.Request.Path = "/index.html";
                await next();
              }
            });
            app.UseMvcWithDefaultRoute();
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
