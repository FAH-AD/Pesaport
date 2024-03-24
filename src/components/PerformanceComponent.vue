<template>
  <v-container class="table-container">
    <div class="d-flex justify-space-between align-center ga-10">
      <!-- Heading -->
      <p class="table-heading">Pesaport Funds Performance</p>

      <!-- Search Bar -->
      <v-text-field
        class="text-field"
        v-model="search"
        label="Search"
        dense
        solo-inverted
        append-inner-icon="mdi-magnify"
        lined
      ></v-text-field>

      <!-- Items Dropdown -->
      <v-select
        :items="items"
        class="select-field"
        theme="light"
        label="Show Entities"
      ></v-select>
    </div>

    <!-- Horizontal Line -->
    <v-divider class="my-4" color="black" thickness="2"></v-divider>

    <!-- Table -->
    <div class="table">
      <v-data-table
        :headers="headers"
        :items="data"
        :items-per-page="8"
        theme="light"
      >
        <template v-slot:items="props">
          <tr>
            <td v-for="header in headers" :key="header.text" class="class-cell">
              {{ props.item[header.value] }}
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>

    <!-- Button -->
    <v-divider class="my-4" color="black" thickness="2"></v-divider>
    <v-btn color="secondary"
      >Get FUll Report <v-icon>mdi-chevron-right</v-icon></v-btn
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      selectedItem: null,
      items: ["Show 10 Entities", "Show 15 Entities", "Show 20 Entities"],
      headers: [
        { text: "Column 1", align: "start", value: "col1" },
        { text: "Column 2", value: "col2" },
        { text: "Column 3", value: "col3" },
        { text: "Column 4", value: "col4" },
        { text: "Column 5", value: "col5" },
        { text: "Column 6", value: "col6" },
        { text: "Column 7", value: "col7" },
        { text: "Column 8", value: "col8" },
      ],
      data: [
        {
          col1: "Net Asset Value(Tsh)",
          col2: "Outstanding Number of Units",
          col3: "Net Asset Value per Unit",
          col4: "Sale Price per Unit",
          col5: "Repurchase Price per Unit",
          col6: "Schema Name",
          col7: "Schema Code",
          col8: "Updated at",
        },
      ],
    };
  },
  created() {
    this.tableData = [
      //add table data here
    ];
  },
};
</script>

<style scoped>
.table-container {
  background: white;
  border-radius: 20px;
  padding: 20px 30px;
  margin-top: 9rem;
  margin-bottom: 6rem;
}
.text-field {
  min-width: 60px;
  border-radius: 50px !important;
  color: black;
}
.select-field {
  width: 50px !important;
  color: black;
}
.class-cell {
  border: 1px solid black;
}
.table-heading {
  font-size: 1.4rem;
  color: black;
  font-weight: 500;
}
.v-data-table-footer {
  display: none !important;
}
.table {
  height: 300px;
}
thead {
  display: none;
}

@media (max-width: 600px) {
  .table-heading {
    font-size: 12px;
  }
}
</style>
