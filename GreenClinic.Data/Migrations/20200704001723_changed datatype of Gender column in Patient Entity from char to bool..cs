using Microsoft.EntityFrameworkCore.Migrations;

namespace GreenClinic.Data.Migrations
{
    public partial class changeddatatypeofGendercolumninPatientEntityfromchartobool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Gender",
                table: "Patients",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(1) CHARACTER SET utf8mb4");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "Patients",
                type: "varchar(1) CHARACTER SET utf8mb4",
                nullable: false,
                oldClrType: typeof(bool));
        }
    }
}
