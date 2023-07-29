<template>
  <section class="page-container">
    <div class="tableDivs">
      <!--列表-->
      <el-table
        border
        :data="tableData"
        highlight-current-row
        v-loading="listLoading"
      >
        <el-table-column
          prop="currency_name"
          label="币种名称"
          align="left"
          min-width="100"
        />
        <el-table-column
          prop="currency_code"
          label="币种Code"
          align="left"
          min-width="100"
        />
        <el-table-column
          prop="balance_fee"
          label="余额"
          align="left"
          min-width="100"
        />
        <el-table-column
          prop="business_no"
          label="商户编号"
          align="left"
          min-width="100"
        />
        <el-table-column
          prop="business_name"
          label="商户名称"
          align="left"
          min-width="100"
        />
        <el-table-column
          prop="remark"
          label="备注"
          align="left"
          min-width="100"
        ></el-table-column>
        <el-table-column
          prop="create_time"
          label="创建时间"
          align="left"
          min-width="100"
        ></el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import { getBusinessWallet, addBusinessWallet } from "@/api/merchant";
export default {
  data() {
    return {
      filters: {
        current_id: "",
      },
      tableData: [],
      currencyList: [],
      listLoading: false,
      labelWidth: "100px",
      formLabelWidth: "120px",
    };
  },
  methods: {
    // 重置
    resetForm() {
      this.$refs.filters.resetFields();
      this.getUsers();
    },
    //获取列表
    getData() {
      getBusinessWallet({
        id: this.$route.params.id,
      })
        .then((res) => {
          this.listLoading = false;
          this.tableData = res;
          this.total = res.total;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 130px;
  margin-left: 10px;
  vertical-align: bottom;
}
.el-dialog__body {
  .info-item {
    span:nth-child(1) {
      width: 80px;
      display: inline-block;
      font-weight: 700;
      font-size: 14px;
      color: #606266;
      line-height: 50px;
      text-align: right;
      padding-right: 20px;
    }
  }
}
</style>