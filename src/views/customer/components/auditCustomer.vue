<style>
  .form{
    padding:15px 35% 15px 5%;
  }
</style>
<template>
    <div class="audit-customer" v-show="access!=0">
      <card>
        <p slot="title">审核操作</p>
        <Form ref="formInline" :label-width="80" class="form">
          <FormItem label="审核笔记">
            <i-input
                v-model.sync="note"
                type="textarea"
                :rows="6"
                :autosize="{minRows: 6,maxRows:6}"
                placeholder="记录一下笔记审核笔记吧"
            ></i-input>
          </FormItem>
          <FormItem label="审核状态">
            <RadioGroup v-model="audit_status">
              <Radio v-for="(key,value) in status" :key="key" :label="value"><span>{{key}}</span></Radio>
            </RadioGroup>
          </FormItem>

          <div v-show="audit_status == 5">
            <FormItem label="放款金额">
              <Input v-model="practical_blance" placeholder="实借金额" style="width: 300px;margin-bottom: 15px;"></Input>
              <Row>
                <Col span="12">
                <DatePicker :value="lona_time" type="date" placeholder="放款日期" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12">
                <DatePicker :value="refund_time" type="date" placement="bottom-end" placeholder="还款日期"
                            style="width: 200px"></DatePicker>
                </Col>
              </Row>
            </FormItem>
          </div>
          <div v-show="accessNextUser.indexOf(audit_status) != -1">
            <FormItem label="指定人员">
              <Select v-model="next_user">
                <Option v-for="item in userList" :value="item.id" :key="item.id">{{item.name}}</Option>
              </Select>
            </FormItem>
          </div>
          <FormItem>
            <Button type="primary" v-on:click="submitAuditMsg">提交</Button>
          </FormItem>
        </Form>
      </card>

        <!--<Card>-->
            <!--<div class="audit-modal__status">-->
                <!--<p slot="title">-->
                    <!--<Icon type="ios-film-outline"></Icon>-->
                    <!--审核笔记-->
                <!--</p>-->
                <!--<i-input-->
                        <!--v-model.sync="note"-->
                        <!--type="textarea"-->
                        <!--:rows="6"-->
                        <!--:autosize="{minRows: 6,maxRows:6}"-->
                        <!--placeholder="记录一下笔记审核笔记吧"-->
                <!--&gt;</i-input>-->
            <!--</div>-->
            <!--<RadioGroup v-model="audit_status">-->
                <!--<Radio v-for="(key,value) in status" :key="key" :label="value"><span>{{key}}</span></Radio>-->
            <!--</RadioGroup>-->
            <!--<div v-show="audit_status == 5">-->
                <!--<Input v-model="practical_blance" placeholder="实借金额" style="width: 300px"></Input>-->
                <!--<Row>-->
                    <!--<Col span="12">-->
                        <!--<DatePicker :value="lona_time" type="date" placeholder="放款日期" style="width: 200px"></DatePicker>-->
                    <!--</Col>-->
                    <!--<Col span="12">-->
                        <!--<DatePicker :value="refund_time" type="daterange" placement="bottom-end" placeholder="还款日期"-->
                                    <!--style="width: 200px"></DatePicker>-->
                    <!--</Col>-->
                <!--</Row>-->
            <!--</div>-->
            <!--<div v-show="accessNextUser.indexOf(audit_status) != -1">-->
                <!--<p style="font-size: 14px;color: #1c2438;font-weight: 700;margin-bottom: 10px;">指定人员</p>-->

                <!--<Select v-model="next_user">-->
                    <!--<Option v-for="item in userList" :value="item.id" :key="item.id">{{item.name}}</Option>-->
                <!--</Select>-->
            <!--</div>-->

            <!--<Button type="primary" v-on:click="submitAuditMsg">提交</Button>-->
            <!--<p>123</p>-->
            <!--<p>123</p>-->
            <!--<p>123</p>-->
            <!--<p>123</p>-->
            <!--<p>123</p>-->

        <!--</Card>-->
    </div>
</template>

<script>
    import {customerAuditStatus, customerLoanStatus, customerUrgeStatus} from '@/libs/util';
    import {customerAuditPost} from '@/api/customer';
    import {fetchStaff} from '@/api/staff';
    import Cookies from 'js-cookie';

    export default {
        name: 'auditCustomer',
        props: ['id'],
        data() {
            return {
                status: null,
                access: Cookies.get('access'),
                customeraudit: null,
                // 审核状态
                audit_status: null,
                // 笔记
                note: '',
                // 用户列表
                userList: [],
                // 指定用户
                next_user: null,
                lona_time: null,
                refund_time: null,
                practical_blance: null,
                accessNextUser: ['3', '4', '9']
            };
        },
        created() {
            this.getNextUser();
            this.getAuditStatus();
        },
        methods: {
            getAuditStatus() {
                let status = {
                    1: customerAuditStatus,
                    2: customerLoanStatus,
                    3: customerUrgeStatus
                };
                this.status = status[this.access];
            },
            getNextUser() {
                let department = parseInt(this.access) + 1;
                console.log('depa', typeof parseInt(this.access));
                fetchStaff({department: department}).then(
                    res => {
                        console.log(res.data);
                        this.userList = res.data.results;
                    }
                );
            },
            submitAuditMsg() {
                if (this.note === '') {
                    this.$Message.warning('您的笔记还没写喔~~赶紧去写笔记吧');
                    return null;
                }
                if (this.audit_status === null) {
                    this.$Message.warning({content: '您还没有填写审核状态！!', duration: 3});
                    return null;
                }
                if (this.next_user === null && this.accessNextUser.indexOf(this.audit_status) !== -1) {
                    this.$Message.warning('您还没有指定下一个人呢!');
                    return null;
                }
                if (this.practical_blance === null && this.audit_status === 5) {
                    this.$Message.warning('您还没有填写实际金额！!');
                    return null;
                }
                if (this.lona_time === null && this.audit_status === 5) {
                    this.$Message.warning('您还没有指定放款日期!');
                    return null;
                }
                if (this.refund_time === null && this.audit_status === 5) {
                    this.$Message.warning('您还没有指定还款日期!');
                    return null;
                }
                let data = {
                    audit_status: this.audit_status,
                    note: this.note,
                    next_user: this.next_user,
                    lona_time: this.lona_time,
                    refund_time: this.refund_time,
                    practical_blance: this.practical_blance,

                };
                customerAuditPost(this.id, data)
                    .then(res => {
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '您已经成功完成对该用户的信息审核',
                            duration: 5
                        });
                    });
            },
            cancel() {
                this.$emit('cancelBlack');
            }
        }
    }
    ;
</script>

<style scoped>

</style>