using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

using Map.Services.Data;

namespace SurveyingAndMaping
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddTransient<ITractMapService, TractMapService>();

            // CORS(Cross-Origin Resourse Sharing) is a mechanism that uses HTTP headers to tell a browser to let
            // a web application run at certain origins (domains) so that it has permission to access certain resources on a server
            // at a different origin
            //services.AddCors(options =>
            //    options.AddPolicy("CorsPolicy", builder =>
            //    builder.AllowAnyMethod()
            //    .AllowAnyHeader()
            //    .WithOrigins("http://localhost:3000") // Defines CORS policy that allows our frontend app hosted in the localhost:300 origin to access the backend.
            //    .AllowCredentials()));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            // Enable the use of this policy in the Configure method.
            //app.UseCors("CorsPolicy");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHttpsRedirection();
            }

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
