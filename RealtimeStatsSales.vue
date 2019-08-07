<template>
  <div>
    <v-layout align-center justify-space-between>
      <cms-v-btn type="back"></cms-v-btn>
    </v-layout>
    <table class="cmsDataTable" ref="dataTable" v-if="report.movieSales">
      <tbody>
        <tr>
          <td class="cell--title">売上確認／{{ $moment(report.reportOf).format('YYYY/MM/DD (dd)') }}</td>
        </tr>
        <tr>
          <td>{{ $moment(report.reportOf).format('YYYY/MM/DD (dd)') }}</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td colspan="2" class="cell--center cell--border">現金売上総計（当日)</td>
          <td class="cell--center cell--border">{{ report.dailyCashIncome | dollarsFilter }}</td>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <th :colspan="maxColumn" class="cell--title">チケット</th>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <th rowspan="4" class="cell--center cell--border">作品名</th>
          <th rowspan="4" class="cell--center cell--border">バージョン</th>
          <th rowspan="2" class="cell--center cell--border">本興行</th>
          <th rowspan="2" class="cell--center cell--border">レイトショー</th>
          <th rowspan="2" class="cell--center cell--border">合計</th>
          <th colspan="5" class="cell--center cell--border">窓口</th>
          <th colspan="2" class="cell--center cell--border">ネット</th>
          <th colspan="2" class="cell--center cell--border">劇場前売券</th>
          <th colspan="2" class="cell--center cell--border">共通券</th>
          <th rowspan="2" class="cell--center cell--border">招待券</th>
          <th colspan="5" class="cell--center cell--border">先行販売　{{ $moment(report.reportOf).add(1, 'day').format('M/D') }}〜上映	</th>
        </tr>
        <tr>
          <th class="cell--center cell--border">現金</th>
          <th class="cell--center cell--border">ｸﾚｼﾞｯﾄ</th>
          <th class="cell--center cell--border">金券</th>
          <th class="cell--center cell--border">事前（現金）</th>
          <th class="cell--center cell--border">事前（ｸﾚｼﾞｯﾄ）</th>
          <th class="cell--center cell--border">当日</th>
          <th class="cell--center cell--border">事前</th>
          <th class="cell--center cell--border">当日</th>
          <th class="cell--center cell--border">事前</th>
          <th class="cell--center cell--border">当日</th>
          <th class="cell--center cell--border">事前</th>
          <th class="cell--center cell--border">現金</th>
          <th class="cell--center cell--border">窓口ｸﾚｼﾞｯﾄ</th>
          <th class="cell--center cell--border">ネット</th>
          <th class="cell--center cell--border">劇場前売</th>
          <th class="cell--center cell--border">共通券</th>
        </tr>
        <tr>
          <th class="cell--center cell--border">有料入場者数</th>
          <th class="cell--center cell--border">有料入場者数</th>
          <th class="cell--center cell--border">有料入場者数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
          <th class="cell--center cell--border">枚数</th>
        </tr>
        <tr>
          <th class="cell--center cell--border">興行収入</th>
          <th class="cell--center cell--border">興行収入</th>
          <th class="cell--center cell--border">興行収入</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
          <th class="cell--center cell--border">金額</th>
        </tr>
        <template v-for="record in report.movieSales.records">
          <tr>
            <td rowspan="2" class="cell--border">{{ record.movie }}</td>
            <td rowspan="2" class="cell--border">{{ record.version }}</td>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.general.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.late.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.overall.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.cash.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.credit.paidVisitor }}</td>
            <td class="cell--right cell--border">0</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.preSalesCash.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.preSalesCredit.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.online.today.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.online.after.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.preSales.today.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.preSales.after.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.common.today.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.common.after.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.invitation.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.cash.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.credit.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.online.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.preSales.paidVisitor }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.common.paidVisitor }}</td>
          </tr>
          <tr>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.general.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.late.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.showTimeSalesSummary.overall.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.cash.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.credit.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">0</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.preSalesCash.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.boxOffice.preSalesCredit.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.online.today.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.deviceSalesSummary.online.after.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.preSales.today.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.preSales.after.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.common.today.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.common.after.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.advanceSalesSummary.invitation.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.cash.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.credit.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.online.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.preSales.total | dollarsFilter }}</td>
            <td class="cell--right cell--border">{{ record.preSalesSummary.common.total | dollarsFilter }}</td>
          </tr>
        </template>
        <tr>
          <td rowspan="2" colspan="2" class="cell--right cell--middle cell--bold cell--border">合計</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.general.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.late.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.overall.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCash.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCredit.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">0</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxPreSalesCash.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxPreSalesCredit.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineToday.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesToday.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonToday.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.invitation.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCashSalesAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCreditSalesAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineSalesAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesSalesAfter.paidVisitor }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonSalesAfter.paidVisitor }}</td>
        </tr>
        <tr>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.general.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.late.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.overall.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCash.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCredit.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">0</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxPreSalesCash.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxPreSalesCredit.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineToday.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesToday.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonToday.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.invitation.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCashSalesAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.boxCreditSalesAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.onlineSalesAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.preSalesSalesAfter.total | dollarsFilter }}</td>
          <td class="cell--right cell--bold cell--border">{{ report.movieSales.grandTotal.commonSalesAfter.total | dollarsFilter }}</td>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <th :colspan="maxColumn" class="cell--title">前売券</th>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <td rowspan="2" class="cell--border cell--middle">作品名</td>
          <td rowspan="2" class="cell--border cell--middle">バージョン</td>
          <th :colspan="maxAdvanceSalesTodayItem * 2 + 2" class="cell--border cell--center">当日</th>
          <td>&nbsp;</td>
          <th :colspan="maxAdvanceSalesPresalesItem * 2 + 2" class="cell--border cell--center">先行販売	</th>
        </tr>
        <tr>
          <td v-if="maxAdvanceSalesTodayItem > 0" :colspan="maxAdvanceSalesTodayItem * 2" class="cell--border cell--center">券種名</td>
          <td class="cell--border">合計</td>
          <td class="cell--border">招待券</td>
          <td>&nbsp;</td>
          <td v-if="maxAdvanceSalesPresalesItem > 0" :colspan="maxAdvanceSalesPresalesItem * 2" class="cell--border cell--center">券種名</td>
          <td class="cell--border">合計</td>
          <td class="cell--border">招待券</td>
        </tr>
        <template v-for="(advanceSale, advanceSaleIndex) in report.advanceSales">
          <tr>
            <td rowspan="2" class="cell--border cell--middle">{{ advanceSale.movie }}</td>
            <td rowspan="2" class="cell--border cell--middle">{{ advanceSale.version }}</td>
            <th v-for="(sale, index) in advanceSale.today.sales"
                :key="`advanceSales${advanceSaleIndex}_today${index}`"
                colspan="2"
                class="cell--border cell--center">
              {{ sale.name }}
            </th>
            <th v-for="(sale, index) in [...Array(maxAdvanceSalesTodayItem - advanceSale.today.sales.length)]"
                :key="`advanceSales${advanceSaleIndex}_todayFiller${index}`"
                colspan="2"
                class="cell--border cell--center">
              &nbsp;
            </th>
            <td rowspan="2" class="cell--border cell--right cell--middle">{{ advanceSale.today.total }}</td>
            <td rowspan="2" class="cell--border cell--right cell--middle">{{ advanceSale.today.invitation }}</td>
            <td>&nbsp;</td>
            <th v-for="(sale, index) in advanceSale.presales.sales"
                :key="`advanceSales${advanceSaleIndex}_presales${index}`"
                colspan="2"
                class="cell--border cell--center">
              {{ sale.name }}
            </th>
            <th v-for="(sale, index) in [...Array(maxAdvanceSalesPresalesItem - advanceSale.presales.sales.length)]"
                :key="`advanceSales${advanceSaleIndex}__presalesFiller${index}`"
                colspan="2"
                class="cell--border cell--center">
              &nbsp;
            </th>
            <td rowspan="2" class="cell--border cell--right cell--middle">{{ advanceSale.presales.total }}</td>
            <td rowspan="2" class="cell--border cell--right cell--middle">{{ advanceSale.presales.invitation }}</td>
          </tr>
          <tr>
            <td v-for="(sale, index) in advanceSale.today.sales"
                :key="`advanceSales${advanceSaleIndex}_sales${index}`"
                colspan="2"
                class="cell--border cell--center">
              {{ sale.qty }}
            </td>
            <td v-for="(sale, index) in [...Array(maxAdvanceSalesTodayItem - advanceSale.today.sales.length)]"
                :key="`advanceSales${advanceSaleIndex}_todayFiller${index}`"
                colspan="2"
                class="cell--border cell--center">
              &nbsp;
            </td>
            <td>&nbsp;</td>
            <td v-for="(sale, index) in advanceSale.presales.sales"
                :key="`advanceSales${advanceSaleIndex}_presales${index}`"
                colspan="2"
                class="cell--border cell--center">
              {{ sale.qty }}
            </td>
            <td v-for="(sale, index) in [...Array(maxAdvanceSalesPresalesItem - advanceSale.presales.sales.length)]"
                :key="`advanceSales${advanceSaleIndex}__presalesFiller${index}`"
                colspan="2"
                class="cell--border cell--center">
              &nbsp;
            </td>
          </tr>
        </template>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <th :colspan="maxColumn" class="cell--title">売店（コンセ・物販）</th>
        </tr>
        <tr>
          <td class="cell--mini"/>
        </tr>
        <tr>
          <td class="cell--border">売店売上区分</td>
          <td colspan="3" class="cell--border">商品名</td>
          <td class="cell--border">売価</td>
          <td class="cell--border">数量</td>
          <td class="cell--border">売上</td>
        </tr>
        <template v-for="(productSales, productSalesIndex) in productSalesRecords.sales">
          <tr v-for="(sale, index) in productSales.sales"
              :key="`productSales${productSalesIndex}_sale${index}`">
            <td v-if="index === 0" class="cell--border">{{ productSales.group }}</td>
            <td v-else class="cell--border">&nbsp;</td>
            <td colspan="3" class="cell--border">{{ sale.product }}</td>
            <td class="cell--border cell--right">{{ sale.unitPrice }}</td>
            <td class="cell--border cell--right">{{ sale.qty }}</td>
            <td class="cell--border cell--right">{{ sale.total }}</td>
          </tr>
        </template>
        <tr>
          <td class="cell--border">合　計</td>
          <td colspan="3" class="cell--border">&nbsp;</td>
          <td class="cell--border cell--right">&nbsp;</td>
          <td class="cell--border cell--right">&nbsp;</td>
          <td class="cell--border cell--right">{{ productSalesRecords.total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import { dollarsFilter } from '@/helpers/core'
  import exportToCSV from '@/helpers/exportToCSV'

  export default {
    name: "daily-sales-report-view",
    data() {
      return {
        date: '',
        report: {},
      }
    },
    computed: {
      ...mapState('app', {
        cinema: state => state.cinema
      }),
      cashTotal() {
        return {
          qty: this.report.movieSales.grandTotal.boxCash.paidVisitor + this.report.movieSales.grandTotal.boxCashSalesAfter.paidVisitor,
          amount: this.report.movieSales.grandTotal.boxCash.total + this.report.movieSales.grandTotal.boxCashSalesAfter.total
        }
      },
      creditTotal() {
        return {
          qty: this.report.movieSales.grandTotal.boxCredit.paidVisitor + this.report.movieSales.grandTotal.boxCreditSalesAfter.paidVisitor,
          amount: this.report.movieSales.grandTotal.boxCredit.total + this.report.movieSales.grandTotal.boxCreditSalesAfter.total
        }
      },
      operationExpensesTotal() {
        return this.report.operationExpenses
          .reduce((prev, curr) => {
            return {
              expense: prev.expense + curr.expense,
            }
          }, {
            expense: 0,
          })
      },
      productSalesRecords() {
        if (!this.report.productSales) {
          return []
        }
        const commerical = this.report.productSales.commercial
        const concession = this.report.productSales.concession
        return {
          sales: [
            ...commerical,
            ...concession,
          ],
          total: this.report.productSales.total
        }
      },
      maxAdvanceSalesTodayItem() {
        if (!this.report.advanceSales) {
          return 0
        }
        return this.report.advanceSales
          .map(advanceSale => advanceSale.today.sales.length)
          .reduce((prev, curr) => curr > prev ? curr : prev, 0)
      },
      maxAdvanceSalesPresalesItem() {
        if (!this.report.advanceSales) {
          return 0
        }
        return this.report.advanceSales
          .map(advanceSale => advanceSale.presales.sales.length)
          .reduce((prev, curr) => curr > prev ? curr : prev, 0)
      },
      maxColumn() {
        const dyna = 8 + (this.maxAdvanceSalesTodayItem + this.maxAdvanceSalesPresalesItem) * 2
        return dyna > 22 ? dyna : 22
      }
    },
    methods: {
      ...mapActions('app', ['fetch', 'fetchCall', 'showError']),
      async initData() {
        await this.fetchCall({
          onCall: async() => {
            this.report = await this.fetch({
              api: 'report/salesConfirmationReport',
              params: {
                cinemaId: this.cinema.uuid,
                date: this.date,
              }
            })
            this.report.movieSales.records.sort((a, b) => {
              if (a.movie > b.movie) {
                return 1
              } else if (a.movie < b.movie) {
                return -1
              } else {
                if (a.version > b.version) {
                  return 1
                } else if (a.version < b.version) {
                  return -1
                } else {
                  return 0
                }
              }
            })
          },
          onError: async(err) => {
            this.showError({
              ...err,
              callback: () => {
                this.$router.go(-1)
              }
            })
          }
        })
      }
    },
    filters: {
      dollarsFilter
    },
    created() {
      this.date = this.$route.params.date
      this.initData()
    },
  }
</script>

<style lang="scss" scoped>

</style>
