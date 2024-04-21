<template>
  <div>
    <v-container class="px-0 px-lg-4">
      <v-card class="pa-4" color="sidebarbg" flat>
        <v-row class="px-4 py-1">
          <v-col>
            <h5>Recent Investments</h5>
          </v-col>
          <v-col class="text-right">
            <p><span class="view-btn">View All</span></p>
          </v-col>
        </v-row>
        <v-divider class="my-2" :thickness="2"></v-divider>

        <v-data-table
          :headers="headers"
          :items="details"
          footer="none"
          class="table"
          bg-color="sidebarbg"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "Plan",
        },
        { key: "code", title: "Account Code", sortable: false },
        { key: "date", title: "Activation Date", sortable: false },
        { key: "amount", title: "Amount ", sortable: false },
        { key: "gain", title: "Gain per Product", sortable: false },
        { key: "status", title: "Status", sortable: false },
      ],
      details: [
        {
          name: "Pesa Fund units 323",
          code: "PF879087",
          date: "2024-01-08 15:53:48",
          amount: "107,000 TZS",
          gain: "0.00000 TZS",
          status: "Active",
        },
        {
          name: "Pesa Fund units 323",
          code: "PF879087",
          date: "2024-01-08 15:53:48",
          amount: "107,000 TZS",
          gain: "0.00000 TZS",
          status: "Active",
        },
        {
          name: "Pesa Fund units 323",
          code: "PF879087",
          date: "2024-01-08 15:53:48",
          amount: "107,000 TZS",
          gain: "0.00000 TZS",
          status: "Active",
        },
      ],
    };
  },

  methods: {
    viewAll() {
      // Handle view all button click
    },
  },
};
</script>
<style scoped>
.table {
  background-color: rgb(var(--v-theme-sidebarbg));
  color: rgb(var(--v-theme-textColor));
  text-wrap: nowrap;
}
.table:hover {
  color: rgb(var(--v-theme-textColor)) !important;
}
.v-data-table-header__content:hover {
  color: rgb(var(--v-theme-textColor)) !important;
}
.view-btn {
  border-bottom: 1px solid #ffc800;
  font-size: 12px;
}
@media (max-width: 600px) {
  .table {
    font-size: 10px;
  }
}
</style>
