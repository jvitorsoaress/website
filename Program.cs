var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews(); // Add services to the container.

var app = builder.Build();

app.UseStaticFiles();

if (!app.Environment.IsDevelopment()) // Configure the HTTP request pipeline.
{
    app.UseHsts(); // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
}

app.UseHttpsRedirection();
app.UseRouting();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}"
);

app.MapFallbackToFile("index.html"); ;

app.Run();
