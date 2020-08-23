using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenClinic.Data.Migrations
{
    public partial class MedicineStockStockNumberAutoIncrement : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddUniqueConstraint(
                name: "AK_MedicineStock_StockNumber",
                table: "MedicineStock",
                column: "StockNumber");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_MedicineStock_StockNumber",
                table: "MedicineStock");
        }
    }
}
