<template>
    <div class="sms-login-page" @keydown="pressKeyDown($event)">
        <div class="page-h clearfix">
            <div class="r">
                <span @click="$router.push('/auth/login')">密码登录</span>
            </div>
        </div>
        <p class="title">学国学网登录</p>
        <div class="block clearfix">
            <MyBox :className="'cellphone medium'">
                <div slot="content">
                    <i></i>
                    <input class="my-input medium" type="text" placeholder="手机号" v-model="cellphone" maxlength="11" autocomplete="off"/>
                </div>
            </MyBox>
            <div class="sms-btn" :class="{'disable':!smsBtnState,'not-allowed':countDownText!='发送验证码'}" @click="sendSms">{{countDownText}}</div>
        </div>
        <div class="block">
            <MyBox :className="'code'">
                <input class="my-input medium" type="text" placeholder="收到的验证码" slot="content" v-model="code" maxlength="6" autocomplete="off"/>
            </MyBox>
            <div class="login-btn-box" :class="{'disable':!loginBtnState}">
                <button @click="toLogin">登录</button>
            </div>
        </div>
        <div class="agree block">
            <div class="icon" :class="{'no-check':!iconCheck}" @click="iconCheck=!iconCheck"><i class="el-icon-check"></i></div>
            <a @click="agreementShow=true">学国学网平台使用协议</a>
        </div>
        <div class="block error-tips-box">
            <div class="error-tips" v-show="errorText.length>0">
                <i></i>
                <p>{{errorText}}</p>
            </div>
        </div>
        <div class="register-agreement" v-show="agreementShow">
            <i class="el-icon-close close" @click="agreementShow=false"></i>
            <section style="margin-left: -5px;font-size: 16px">《学国学网服务使用协议》</section>
            <section>
                <p class="title">第一条【完全了解】</p>
                <p class="content">请您（以下亦称“用户”）仔细阅读本协议全部条款，并确认您已完全了解本协议之规定。未成年人应当在监护人陪同和指导下阅读本协议，并在使用本协议项下服务前取得监护人的同意。</p>
                <p class="content">请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉服务。您的注册、登录、使用等行为将视为对本协议的接受，并同意接受本协议各项条款的约束，本协议将构成您与北京国文互联教育科技集团有限公司下属产品学国学网APP之间直接有约束力的法律文件。</p>
            </section>
            <section>
                <p class="title">第二条【充分授权】</p>
                <p class="content">请确认您依照中华人民共和国法律（为本协议之目的，含行政法规、部门规章、规范性文件，下同）、及您所在地之法律、及您自愿或应当接收其管辖之法律（以下合称“法律”），有权签署并同意接受本协议的约束。如果您代表您的雇主或单位，请在签署前，确认并保证您已获得签署本协议的充分授权。</p>
            </section>
            <section>
                <p class="title">第三条 【协议变更】</p>
                <p class="content">本协议如果变更，“学国学网”将尽可能提前在“学国学网”发布通知。但您应了解并同意，“学国学网”有可能未经事先通知，而修改或变更本协议的全部或部分内容，您也应随时关注本协议是否有修改或变更之情形。</p>
                <p class="content">如果本协议修改或变更，而您不能接受修改或变更后的内容，您可以停止使用“学国学网”。如果您继续使用“学国学网”，则表明您完全接受并愿意遵守修改或变更后的本协议。
    无论您停止使用或继续使用“学国学网”，您都承诺不因本协议修改或变更给您造成的损失或不便而向北京国文互联教育科技集团有限公司（及关联方）或“学国学网”要求赔偿或补偿。</p>
            </section>
            <section>
                <p class="title">第四条 【服务方式】</p>
                <p class="content">“学国学网”主要是一家网络服务提供者，可针对不同传播渠道用户为其提供内容服务，前述传播渠道包括但不限于：</p>
                <p class="section">1）通过“学国学网”的服务；</p>
                <p class="section">2）“学国学网”提供的可以使用的其他传播渠道。</p>
                <p class="content">除免费服务外，“学国学网”可能提供部分收费服务。您可以通过付费方式购买收费服务，具体方式为：通过网上银行或其他“学国学网”提供的付费途径支付一定数额的人民币，从而获得收费服务使用权限。对于收费服务，“学国学网”会在您使用之前给予明确的提示，只有根据提示确认其同意按照前述支付方式支付费用并完成了支付行为，才能使用该等收费服务。支付行为的完成以银行或第三方支付平台生成“支付已完成”的确认通知为准。
    您应了解“学国学网”可能对该等服务（含收费服务）进行更改、更新或提高，并承诺不因“学国学网”更改、更新或提高其服务给您造成的损失或不便而向北京国文互联教育科技集团有限公司（及关联方）或“学国学网”要求赔偿或补偿。
    </p>
            </section>
            <section>
                <p class="title">第五条【善意使用】</p>
                <p class="content">您同意，遵守法律及本协议规定，秉承善意使用“学国学网”，且保证：</p>
                <p class="section">1） 不会利用“学国学网”进行非法活动、或进行侵犯他人权利或损害他人利益的活动；不会以非法方式获取或利用“学国学网”其他用户的信息。</p>
                <p class="section">2） 不会以技术方式攻击或破坏或改变“学国学网”的部分或全部、或干扰其运行；不会以非法方式获取或使用“学国学网”的任何软件、代码或其他技术或商业信息；不会对“学国学网”运行的任何程序进行反向工程、反向编译、反向汇编或改写。</p>
                <p class="section">3） 不会未经许可使用“学国学网”的网站名称、公司名称、商标、商业标识、网页版式或内容、或其他由北京国文互联教育科技集团有限公司（及关联方）或“学国学网”享有知识产权或权利的信息或资料；不会侵犯北京国文互联教育科技集团有限公司（及关联方）或“学国学网”的商标权、著作权、专利权、其他知识产权或其他合法权利或权益。不会以任何方式贬损“学国学网”的商业声誉。</p>
                <p class="section">4） 不会利用“学国学网”进行其他违背公序良俗的活动。
    您使用“学国学网”的记录，可能被保存作为对您不利的证据。“学国学网”也可能将您违反法律或侵犯第三方权利或权益的记录报告给行政主管部门、司法机关。
    </p>
            </section>
            <section>
                <p class="title">第六条 【注册账号】</p>
                <p class="content">您需要在“学国学网”注册一个账号，并按照“学国学网”的要求为该账号设置密码，才可以使用该账号登录并使用“学国学网”。您可依照“学国学网”的要求修改您的账号密码，但不可修改账号。</p>
                <p class="content">您注册账号时，应按照“学国学网”的提示及要求填写或提供资料、信息，并确保用户身份及信息的真实性、正确性及完整性；如果资料发生变化，您应及时更改。</p>
                <p class="content">您同意并承诺：</p>
                <p class="section">1）不故意冒用他人信息为您注册帐号；</p>
                <p class="section">2）不未经他人合法授权以他人名义注册帐号；</p>
                <p class="section">3）不使用色情、暴力或侮辱、诽谤他人等违反公序良俗的词语注册帐号。
    如您违反前述规定，“学国学网”有权随时拒绝您使用该账号，或者限制您使用，或者注销该账号。
    </p>
            </section>
            <section>
                <p class="title">第七条 【账号使用】</p>
                <p class="content">在您完成账号注册后，“学国学网”将向您提供帐号及初始密码信息，此后，您应自行保管及维持密码及帐号的安全。您应自行使用该账号，并对任何人利用您的帐号及密码所进行的活动负完全的责任。</p>
                <p class="content">您应了解，在账号和密码匹配时，“学国学网”无法对非法或未经您授权使用您帐号及密码的行为作出甄别，因此，“学国学网”对任何使用您账号和密码登录并使用“学国学网”的行为不承担任何责任。</p>
                <p class="content">您同意并承诺：</p>
                <p class="section">1） 当您的帐号或密码遭到未获授权的使用，或者发生其他任何安全问题时，您会立即有效通知到“学国学网”；</p>
                <p class="section">2） 当您每次上网或使用其他服务完毕后，会将有关帐号等安全退出；</p>
                <p class="content">“学国学网”有权根据自己的判定，在怀疑账号被不当使用时，拒绝账号使用或限制账号使用或注销该账号。</p>
                <p class="content">如您连续180天未以账号登录“学国学网”，则“学国学网”有权根据自己的判定，注销该账号且无需事先向您发送通知。</p>
            </section>
            <section>
                <p class="title">第八条 【个人信息及隐私条款】</p>
                <p class="content">学国学网”可能需要搜集能识别用户身份的个人信息以便可以在必要时联系用户，或为用户提供更好的使用体验。“个人信息”包括但不限于用户的姓名、性别、年龄、出生日期、联系电话、身份证号、地址、受教育情况、公司情况、所属行业、兴趣爱好、所处位置信息、个人说明、手机软硬件信、手机识别码等。</p>
                <p class="content">“学国学网”承诺，不以非法方式披露您依照“学国学网”规定的方式标明应予保密的用户个人信息。</p>
                <p class="content">您了解并同意，“学国学网”可依照法律或司法、行政机关的强制性命令对第三方披露您的个人信息且无需事先向您发出通知。</p>
                <p class="content">您了解并同意，当您购买在“学国学网”列出的商品或服务时，您的信息将被提供前述商品或服务商家收集，您应自行承担此类信息披露的责任。</p>
                <p class="content">您了解并同意，“学国学网”在下述情形下可利用您的个人信息：</p>
                <p class="section">1） 在紧急情况下，为维护用户及公众的权益。</p>
                <p class="section">2） 为维护“学国学网”的著作权、商标权、专利权及其他任何合法权利或权益。</p>
                <p class="section">3） 在进行促销或抽奖时，“学国学网”可能会与赞助商共享用户的个人信息，在这些情况下“学国学网”会在发送用户信息之前进行提示，并且用户可以通过明确表示不参与活动而终止传送过程。</p>
                <p class="section">4） 为获取第三方数据而将用户信息与第三方数据匹配。</p>
                <p class="section">5） 将用户数据用于统计，以便向未来的合作伙伴、广告商及其他第三方以及为了其他合法目的而描述“学国学网”的服务。</p>
            </section>
            <section>
                <p class="title">第九条 【知识产权】</p>
                <p class="content">北京国文互联教育科技集团有限公司对“学国学网”服务及“学国学网”所使用的软件所包含的受知识产权法或其他法律保护的资料享有相应的权利。“学国学网”的整体内容（包括但不仅限于设计图样以及其他图样、产品及服务名称）版权归北京国文互联教育科技集团有限公司所享有，任何人不得使用、复制或用作其他用途。</p>
                <p class="content">经由“学国学网”传送的文字、图片、音频、视频及其他内容，受到著作权法、商标法、专利法或其他法律的保护；未经北京国文互联教育科技集团有限公司书面授权许可，您不得自行或许可第三方进行修改、出租、售卖或衍生其他作品。</p>
                <p class="content">北京国文互联教育科技集团有限公司对其专有内容、原创内容和其他通过授权取得的独占或者独家内容享有知识产权。未经北京国文互联教育科技集团有限公司书面许可，任何单位和个人不得私自转载、传播和提供收听服务或者有其他侵犯北京国文互联教育科技集团有限公司知识产权的行为。否则，将承担法律责任。</p>
                <p class="content">为了促进知识的分享和传播，您将在“学国学网”上发表的全部内容（包括但不仅限于留言、评论等），授予“学国学网”免费的、不可撤销的、非独家使用许可，“学国学网”有权将该内容用于“学国学网”各种形态的产品和服务上，包括但不限于“学国学网”以及发表的应用或其他互联网产品。</p>
                <p class="content">您在“学国学网”上传或发表的内容，应保证其为著作权人或已取得合法授权，并且该内容不会侵犯任何第三方的合法权益。如果第三方提出关于著作权的异议，“学国学网”有权根据实际情况删除相关的内容，且有权追究用户的法律责任。给“学国学网”或任何第三方造成损失的，用户应负责全额赔偿。</p>
                <p class="content">“学国学网”有权对您发布的内容进行审核，有权根据相关证据结合《侵权责任法》、《信息网络传播权保护条例》等法律法规及“学国学网”学习小组指导原则对侵权信息进行处理。</p>
            </section>
            <section>
                <p class="title">第十条 【链接】</p>
                <p class="content">为方便您使用，“学国学网”可能会提供第三方国际互联网网站或资源链接。您应了解，除非另有声明，“学国学网”无法对第三方网站服务进行控制。您因下载或传播或使用或依赖上述网站或资源所生的损失或损害，应由您自行承担全部责任。</p>
            </section>
            <section>
                <p class="title">第十一条 【容忍义务】</p>
                <p class="content">您应了解，基于不同用户的个人特征和喜好，“学国学网”可能存在一些让您不快、厌恶或难以接受的内容。您承诺，不就前述内容追究“学国学网”或第三方的任何责任。</p>
            </section>
            <section>
                <p class="title">第十二条 【“学国学网”的商业活动】</p>
                <p class="content">您了解并接受，“学国学网”为维护其运营所经营，可能进行下述商业活动：</p>
                <p class="section">1） 通过电子邮件、客户端、网页或其他合法方式向用户发送商品促销或其他相关商业信息。</p>
                <p class="section">2） 通过增值服务系统或其他方式向用户发送的相关服务信息或其他信息，其他信息包括但不限于通知信息、宣传信息、广告信息等。</p>
            </section>
            <section>
                <p class="title">第十三条 【非商业使用】</p>
                <p class="content">您同意，仅以非商业目的使用“学国学网”；不对“学国学网”的任何部分或全部进行商业性质利用、复制、拷贝、出售、调查、广告，或将“学国学网”用于其他任何商业目的或商业性质的活动；但“学国学网”与您另行签订有协议或“学国学网”另行指定可供您使用的特定商业服务除外。</p>
            </section>
            <section>
                <p class="title">第十四条 【网络运行】</p>
                <p class="content">您应理解并同意，因法律、政策、技术、经济、管理的原因，除非您和“学国学网”另有约定，“学国学网”不会因以下情形出现而对您承担责任：</p>
                <p class="section">1） “学国学网”无法使用或中断使用或无法完全适合用户的使用要求。</p>
                <p class="section">2） “学国学网”受到干扰，无法及时、安全、可靠运行，或出现任何错误。</p>
                <p class="section">3） 经由“学国学网”取得的任何产品、服务（含收费服务）或其他材料不符合您的期望。</p>
                <p class="section">4） 用户资料遭到未经授权的使用或修改。</p>
                <p class="content">“学国学网”不对您在本本协议项下服务中相关数据的删除或储存失败负责。“学国学网”可以根据实际情况自行决定用户在本服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。如您停止使用“学国学网”，或“学国学网”所提供的服务终止或中止，“学国学网”可以从服务器上永久地删除用户的数据。“学国学网”没有义务向用户返还任何数据。</p>
            </section>
            <section>
                <p class="title">第十五条 【服务终止】</p>
                <p class="content">本协议或本协议项下“学国学网”所提供的服务（含收费服务）可在下述情形下部分或全部中止或终止：</p>
                <p class="section">1） 因法律规定，或“学国学网”服从行政命令或司法判令的要求。</p>
                <p class="section">2） 用户违反本协议。</p>
                <p class="section">3） “学国学网”认为应予终止的其他情形。</p>
                <p class="content">在一般情形下，“学国学网”会提前按照您提供的联系方式以电子邮件或短信或其他电子方式通知您，服务将中止或终止。您应了解并同意，在紧急情况或特殊下，“学国学网”可不经通知即中止或终止服务。</p>
                <p class="content">在本协议或本协议项下“学国学网”提供的服务（含收费服务）中止或终止时，“学国学网”有权</p>
                <p class="section">1） 拒绝用户登录“学国学网”；</p>
                <p class="section">2） 删除用户信息；</p>
                <p class="section">3） 删除用户购买的内容。</p>
                <p class="content">您同意，不因本协议或本协议项下“学国学网”所提供的服务中止或终止，而要求北京国文互联教育科技集团有限公司（及关联方）或“学国学网”向您作出赔偿或补偿或承担任何其他责任。</p>
            </section>
            <section>
                <p class="title">第十六条 【法律适用】</p>
                <p class="content">您在使用“学国学网”时，应遵守中华人民共和国法律、及您所在地之法律、及您自愿或应当接收其管辖之法律。</p>
                <p class="content">本协议的解释及履行应按照中华人民共和国法律进行。</p>
            </section>
            <section>
                <p class="title">第十七条 【法律责任】</p>
                <p class="content">您应就所上传的内容承担全部法律责任；无论前述责任是因侵犯第三方权利所引起的、或因您违反与第三方或本协议引起的、或因您违反法律引起的；前述责任包括对“学国学网”或第三方所承担的民事责任、或行政机关要求承担的行政责任或刑事责任。</p>
                <p class="content">您同意，如因您违反法律规定或本协议规定给“学国学网”造成损失，您将充分赔偿“学国学网”所遭受的损失、包括其直接损失、间接损失、预期利益损失等一切损失。</p>
                <p class="content">您承诺，如因第三方向您主张权利而导致您承担责任，或您承担行政责任或刑事责任的，您不以此为理由追究“学国学网”的责任。</p>
                <p class="content">如您应向“学国学网”承担责任，前述责任不因本协议或本协议项下的服务被终止而免除。</p>
            </section>
            <section>
                <p class="title">第十八条 【相关协议】</p>
                <p class="content">“学国学网”可能不时发布针对用户的相关协议，并可能将该相关协议作为对本协议的补充或修改而将其内容作为本协议的一部分。请您及时关注并阅读相关协议。</p>
            </section>
            <section>
                <p class="title">第十九条 【争议解决】</p>
                <p class="content">您和“学国学网”均同意，因本协议解释或执行引起的任何争议，双方应首先友好协商解决。协商不成时，则任一方均可将争议提交北京仲裁委员会依据其届时有效的仲裁规则以仲裁方式解决。仲裁地点为北京，仲裁语言为中文。仲裁裁决为终局的，对各方均有法律约束力。</p>
                <p class="content">请您再次确认您已全部阅读并充分理解上述协议。</p>
            </section>
        </div>
    </div>
</template>
<script lang="ts">
import { Component ,Vue } from 'vue-property-decorator'
import MyBox from '~/components/MyBox.vue'
import {mapActions} from 'vuex'
@Component({
    components:{MyBox},
    computed:{
        smsBtnState(){
            return this.cellphone.length>=11
        },
        loginBtnState(){
            return this.cellphone.length>=11&&this.code.length==6
        }
    },
    methods:{
        ...mapActions(['setUserData','setReceiveCouponClick'])
    },
})
export default class SmsLogin extends Vue{
    errorText = ''
    cellphone:string = ''
    code:string = ''
    countDownText:String = '发送验证码'
    timer:any = null
    iconCheck:boolean = true
    clickCode = false
    agreementShow = false
    head(){
        return{
            title:'短信登录 | 学国学网'
        }
    }
    /**
     * 回车事件
     */
    pressKeyDown(e:any){
        if(e.target.nodeName.toLocaleLowerCase()=='input'&&e.keyCode=='13'){
            this.toLogin()
        }
    }
    async sendSms(){
        if(!this.smsBtnState) return false;
        if(!this.$regExp.phone.test(this.cellphone)){
            this.errorText = '请输入正确的手机号码';
            return;
        }
        if(this.countDownText != '发送验证码') return false;
        this.clickCode = true;
        let time = 60;
        this.countDownText = `${time}s重新发送`;
        this.timer = setInterval(()=>{
            if(time<=1){
                this.countDownText = '发送验证码';
                clearInterval(this.timer);
            }else{
                time--;
                this.countDownText = `${time}s重新发送`;
            }
        },1000)
        let smsQuery = {
            params:{
                cellphone:this.cellphone,
                tokenType:3,
                smsType:1
            }
        }
        let response =await this.$axios.$get(this.$server.getSmsCode,smsQuery)
        if(response.status!=200){
            return;
        }
    }
    async toLogin(){
        if(!this.loginBtnState) return;
        this.errorText = ''
        if(!this.$regExp.phone.test(this.cellphone)){
            this.errorText = '请输入正确的手机号码';
            return;
        }
        if(this.code.length<6){
            this.errorText = '请输入正确的验证码';
            return;
        }
        if(!this.iconCheck){
            this.errorText = '请先同意平台协议';
            return;
        }
        if(!this.clickCode){
            this.errorText = '验证码错误,请重新输入';
            return;
        }
        let loadingInstance = this.$loading.service({
            target:document.getElementsByClassName('sms-login-page')[0],
            background:'rgba(255,255,255,0)'
        });
        let query = {
            cellphone:this.cellphone,
            code:this.code,
            tokenType:'3'
        }
        let res = await this.$axios.$post(this.$server.loginBySms,query)
        loadingInstance.close()
        if(res.status==200){
            this.setUserData(res.content)
            this.$setCookie('xgx_user',JSON.stringify(res.content))
            let redirectUrl = sessionStorage.getItem('redirectUrl');
            if(redirectUrl){
                if(redirectUrl.includes('doubleEleven')){
                    this.setReceiveCouponClick(true)
                }
                sessionStorage.removeItem('redirectUrl');
                this.$router.push(redirectUrl)
            }else{
                this.$router.push('/home')
            }
        }else{
            this.errorText = res.message;
        }
    }
}
</script>
<style lang="scss" scoped>
    .sms-login-page{
        position: absolute;
        top:55%;
        left:50%;
        transform: translate(-50%,-50%);
        text-align: center;
        height: 437px;
        width: 590px;
        background:rgba(255,255,255,1);
        border-radius:6px;
        padding: 30px 40px;
        .page-h{
            .r{
                float: right;
                span{
                    font-size:16px;
                    font-family:MicrosoftYaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    cursor: pointer;
                }
            }
        }
       .title{
            font-size:30px;
            font-family:MicrosoftYaHei;
            letter-spacing: 1px;
            color:rgba(51,51,51,1);
            line-height:48px;
            margin:40px 0 30px 0;
        }
        .block{
            position: relative;
            margin-bottom:20px;
            font-size: 0;
            .cellphone,.code{
                display: inline-block;
                vertical-align: middle;
            }
            .my-input{
                padding: 0 20px;
            }
            .cellphone{
                .my-input{
                    padding: 0 20px 0 40px;
                }
                i{
                    display: block;
                    width: 11px;
                    height: 15px;
                    position: absolute;
                    top:50%;
                    margin-top:-7px;
                    left:22px;
                    z-index: 2;
                    background: url('../../../../assets/images/phone_icon.png')no-repeat 50% 50% /cover;
                }
            }
            .sms-btn{
                display: inline-block;
                vertical-align: middle;
                width: 110px;
                height: 40px;
                margin-left: 15px;
                cursor: pointer;
                text-decoration:underline;
                line-height: 40px;
                font-size: 14px;
                &.disable{
                    color:#333333;
                    cursor: not-allowed;
                }
                &.not-allowed{
                    cursor: not-allowed;
                    color:#999;
                }
            }
            .login-btn-box{
                display: inline-block;
                vertical-align: middle;
                margin-left: 15px;
                button{
                    width:110px;
                    height:44px;
                    line-height: 44px;
                    font-size: 14px;
                    color:#fff;
                    background: #C30D23;
                    border-radius: 5px;
                    outline: none;
                    border:none;
                    cursor: pointer;
                    &:hover{
                        background: #d6394c;
                    }
                }
                &.disable{
                    button{
                        background: #999999;
                        cursor: not-allowed;
                        &:hover{
                            background: #999999;
                        }
                    }
                }
            }
            &.agree{
                width: 388px;
                margin:0 auto 15px auto;
                text-align: left;
                cursor: default;
                .icon,a,span{
                    display: inline-block;
                    vertical-align: middle;
                }
                .icon{
                    font-size: 0;
                    margin-right: 10px;
                    background: #C30D23;
                    border:1px solid #C30D23;
                    height: 16px;
                    width: 16px;
                    padding: 2px 1px;
                    &.no-check{
                        background: #fff;
                        i{
                            color:#999;
                            display: none;
                        }
                        border:1px solid #999;
                    }
                    i{
                        color:#fff;
                        font-size: 12px;
                    }
                }
                a,span{
                    line-height: 30px;
                    font-size: 14px;
                    color:#666666;
                    letter-spacing: 2px;
                }
                 a:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            &.error-tips-box{
                width: 388px;
                margin:0 auto;
                .error-tips{
                    float: left;
                    color:#AD0015;
                    font-size: 0;
                    p{
                        display: inline-block;
                        vertical-align: middle;
                        font-size: 14px;
                        line-height: 22px;
                        margin-left: 10px;
                    }
                    i{
                        height: 22px;
                        width: 22px;
                        display: inline-block;
                        vertical-align: middle;
                        background: url('../../../../assets/images/error_icon.png')no-repeat 50% 50% /cover;
                    }
                }
            }
        }
        .register-agreement{
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: auto;
            background: #fff;
            border-radius: 5px;
            top:0;
            left: 0;
            padding: 20px;
            z-index: 2;
            .close{
                position: fixed;
                right: 8px;
                top:10px;
                color:#AD0015;
                font-size: 22px;
                cursor: pointer;
            }
            .title{
                margin:0;
                line-height: 40px;
            }
            p{
                font-size: 14px;
            }
        }
    }
</style>
