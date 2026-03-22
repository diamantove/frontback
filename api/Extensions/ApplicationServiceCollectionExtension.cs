using Microsoft.OpenApi.Models;

public static class ApplicationServiceCollectionExtension
{
    public static IServiceCollection AddServiceCollection(this IServiceCollection services, ConfigurationManager configurationBinder)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(opt =>
        {
            opt.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "API списка контактов",
            });
        });
        services.AddControllers();

        var stringConnection = configurationBinder.GetConnectionString("SqliteStringConnection");

        services.AddSingleton<IStorage>(new SqliteStorage(stringConnection));

        services.AddCors(opt =>
        opt.AddPolicy("CorsPolicy", policy =>
        {
            policy.AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins(configurationBinder["client"]);
        }));

        return services;
    }
} 