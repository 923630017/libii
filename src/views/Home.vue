<template>
  <div class="home">
    <div class="section-wrapper">
      <Table :columns="columns" :data="data" >
        <template slot-scope="{ row }" slot="action">
            <Button type="success"  @click="goPage(row)" style="margin-right: 5px">编辑</Button>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
import { getChannelManageData } from '@/api/channel';

export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: '渠道信息',
          key: 'channel',
          align: 'center',
        },
        {
          title: '插屏 Interstitial',
          key: 'interOriginPriority',
          align: 'center',
        },
        {
          title: '开屏 Splash',
          key: 'splashOriginPriority',
          align: 'center',
        },
        {
          title: '横幅 Banner',
          key: 'banOriginPriority',
          align: 'center',
        },
        {
          title: 'get free',
          key: 'getFreeOriginPriority',
          align: 'center',
        },
        {
          title: '操作',
          slot: 'action',
          align: 'center',
        },
      ],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goPage(row) {
      this.$router.push('/channel-data-manage-edit');
      localStorage.setItem('channelId', row.id);
    },
    getData() {
      this.tableLoading = true;
      getChannelManageData()
        .then((res) => {
          this.data = res;
          this.tableLoading = false;
        })
        .catch(() => {
          this.tableLoading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped>

</style>
