var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

var frontendUrl = Environment.GetEnvironmentVariable("FRONTEND_URL");

builder.Services.AddCors(options =>
{
    options.AddPolicy("ReactApp", policy =>
    {
        policy.WithOrigins(frontendUrl ?? "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseRouting();

app.UseCors("ReactApp");

app.MapControllers();

app.MapGet("/", () => "Portfolio API is running");

app.Run();