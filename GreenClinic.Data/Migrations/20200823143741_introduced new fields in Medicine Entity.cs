using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenClinic.Data.Migrations
{
    public partial class introducednewfieldsinMedicineEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "MedicineType",
                table: "Medicines",
                maxLength: 50,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "varchar(50) CHARACTER SET utf8mb4",
                oldMaxLength: 50);

            migrationBuilder.AlterColumn<string>(
                name: "MedicineName",
                table: "Medicines",
                maxLength: 80,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(50) CHARACTER SET utf8mb4",
                oldMaxLength: 50);

            migrationBuilder.AddColumn<string>(
                name: "Abbreviation",
                table: "Medicines",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UniqueId",
                table: "Medicines",
                nullable: false,
                defaultValue: 0)
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddUniqueConstraint(
                name: "AK_Medicines_UniqueId",
                table: "Medicines",
                column: "UniqueId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropUniqueConstraint(
                name: "AK_Medicines_UniqueId",
                table: "Medicines");

            migrationBuilder.DropColumn(
                name: "Abbreviation",
                table: "Medicines");

            migrationBuilder.DropColumn(
                name: "UniqueId",
                table: "Medicines");

            migrationBuilder.AlterColumn<string>(
                name: "MedicineType",
                table: "Medicines",
                type: "varchar(50) CHARACTER SET utf8mb4",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 50,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "MedicineName",
                table: "Medicines",
                type: "varchar(50) CHARACTER SET utf8mb4",
                maxLength: 50,
                nullable: false,
                oldClrType: typeof(string),
                oldMaxLength: 80);
        }
    }
}
