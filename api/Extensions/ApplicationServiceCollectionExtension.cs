using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

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

        services.AddDbContext<SqliteDbContext>(opt => opt.UseSqlite(stringConnection));

        services.AddScoped<IPaginationStorage, SqlitePaginationEfStorage>();
        services.AddScoped<IInitializer, SqliteEfFakerInitializer>();

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