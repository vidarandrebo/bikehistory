rm Data/bike.db
rm Data/Migrations/*.cs
dotnet ef migrations add init -o Data/Migrations/
dotnet ef database update
