using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenClinic.Data.Migrations
{
    public partial class revisitedschemaandremovedMedicineStockHistoryEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PurchaseHistories");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PurchaseHistories",
                columns: table => new
                {
                    Id = table.Column<string>(type: "varchar(255) CHARACTER SET utf8mb4", nullable: false),
                    MedicineStockID = table.Column<string>(type: "varchar(255) CHARACTER SET utf8mb4", nullable: false),
                    Price = table.Column<int>(type: "int", nullable: false),
                    Quantity = table.Column<int>(type: "int", nullable: false),
                    Stamp = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    TimeStamp = table.Column<DateTime>(type: "datetime(6)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PurchaseHistories", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PurchaseHistories_MedicineStock_MedicineStockID",
                        column: x => x.MedicineStockID,
                        principalTable: "MedicineStock",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PurchaseHistories_MedicineStockID",
                table: "PurchaseHistories",
                column: "MedicineStockID");
        }
    }
}
