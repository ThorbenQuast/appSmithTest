export default {
	maleCount: 0,
	femaleCount: 0,
	ComputSummary () {
		this.maleCount = 0;
		this.femaleCount = 0;
		for (var rowIndex = 0; rowIndex < usersTable.tableData.length; ++rowIndex) {
			var gender = usersTable.tableData[rowIndex].gender;
			if (gender=="male") this.maleCount++;
			else if (gender=="female") this.femaleCount++;
		}
	},
}