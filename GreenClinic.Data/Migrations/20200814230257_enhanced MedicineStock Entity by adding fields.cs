using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenClinic.Data.Migrations
{
    public partial class enhancedMedicineStockEntitybyaddingfields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Availability",
                table: "MedicineStock");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "MedicineStock",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "Price",
                table: "MedicineStock",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddColumn<int>(
                name: "StockNumber",
                table: "MedicineStock",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "MedicineStock");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "MedicineStock");

            migrationBuilder.DropColumn(
                name: "StockNumber",
                table: "MedicineStock");

            migrationBuilder.AddColumn<bool>(
                name: "Availability",
                table: "MedicineStock",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }
    }
}
