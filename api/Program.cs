using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddServiceCollection(builder.Configuration);

var app = builder.Build();
// app.Services.AddCustomService(builder.Configuration);
app.Services.AddCustomService(builder.Configuration);

app.UseSwagger();
app.UseSwaggerUI();

app.UseCors("CorsPolicy");
app.MapControllers();
app.Run();
