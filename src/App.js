import "./App.css";

import Onboarding1 from "./pages/splash pages/Onboarding1";
import Onboarding2 from "./pages/splash pages/Onboarding2";
import Onboarding3 from "./pages/splash pages/Onboarding3";
import Roles from "./pages/splash pages/Roles";
import Signup from "./pages/employer/signup/Signup";
import Login from "./pages/employer/login/Login";
import HomePage from "./pages/employer/home/Home";
import Message from "./pages/employer/message_and_notification/Message";
import Notification from "./pages/employer/message_and_notification/Notification";
import ServiceCategory from "./pages/employer/service_category/ServiceCategory";
import Agency from "./pages/employer/agencies/Agency";
import MyndaForm from "./pages/mynda/createmynda/MyndaPage";
import AboutYourself from "./pages/mynda/aboutyou/AboutYourself";
import LabHomePage from "./pages/laboratory/home/LabHomePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEducation from "./pages/mynda/addEdu/AddEdu";
import EditWorkX from "./pages/mynda/editWorkEx/EditWorkX";
import WorkExperience from "./pages/mynda/workExperience/WorkExperience";
import VerifyOTP from "./pages/mynda/verify/VerifyNumber";
import UploadProof from "./pages/mynda/uploadProof/UploadProof";
import TermsCondition from "./pages/mynda/terms/Terms";
import ResetPassword from "./pages/mynda/resetPassword/ResetPassword";
import NewPassword from "./pages/mynda/newPassword/NewPassword";
import MyndaLogin from "./pages/mynda/myndaLogin/LoginPage";
import Congrat from "./pages/mynda/congrats/Congrat";
import AddCard from "./pages/agent/addCard/AddCard";
import AddShareHolder from "./pages/agent/addshareholder/AddShareHolder";
import AgentForm from "./pages/agent/createAgent/AgentPage";
import BookInspection from "./pages/agent/bookInspection/BookInspection";
import CompanyInfo from "./pages/agent/companyInfo/CompanyInfo";
import EditShareHolder from "./pages/agent/editshareholder/EditShareHolder";
import JobApplication from "./pages/agent/jobApp/JobApplication";
import TrainingSchool from "./pages/agent/trainingSchool/TrainingSchool";
import VerifyNumber from "./pages/employer/number verification/VerifyNumber";
import LabSignup from "./pages/laboratory/signup/LabSignup";

import PersonalDetails from "./pages/agent/personalDetails/PersonalDetails";
import MyndaHomePage from "./pages/mynda/homePage/Home";
import Verification from "./pages/mynda/verification/Verification";
import PoliceVerification from "./pages/mynda/policeverification/PoliceVerification";
import LabTest from "./pages/mynda/labTest/LabTest";
import Congrat2 from "./pages/mynda/congrat2/Congrat2";
import VerifyAgentOTP from "./pages/agent/verify/Verify";
import TermsConditionAgent from "./pages/agent/terms/TermsAgent";
import CongratAgent from "./pages/agent/congratAgent/CongratAgent";
import AgentLogin from "./pages/agent/login/AgentLogin";
import ResetPasswordAgent from "./pages/agent/resetPasswordAgent/ResetPasswordAgent";
import NewPasswordAgent from "./pages/agent/newPasswordAgent/NewPasswordAgent";
import CongratAgent2 from "./pages/agent/congratAgent2/CongratAgent2";
import MessageMynda from "./pages/mynda/message/Message";
import NotificationMynda from "./pages/mynda/notificationMynda/Notification";
import JobCategory from "./pages/mynda/jobCategory/JobCategory";
import MaidsHelp from "./pages/mynda/maids-help/Maids-Helps";
import Jobs from "./pages/mynda/jobs/Jobs";
import SavedJobs from "./pages/mynda/savedjobs/SavedJobs";
import More from "./pages/mynda/more/More";
import Wallet from "./pages/mynda/wallet/Wallet";
import LodgeComplain from "./pages/mynda/lodgecomplain/LodgeComplain";
import WithdrawFunds from "./pages/mynda/withdrawfunds/WithdrawFunds";
import SendFunds from "./pages/mynda/sendfunds/SendFunds";
import TopUpWallet from "./pages/mynda/topupwallet/TopUpWallet";
import Location from "./pages/mynda/location/Location";
import JobDetail from "./pages/mynda/jobdetails/JobDetail";
import AccountSettins from "./pages/mynda/accountsettings/AccountSettins";
import Guarantor from "./pages/mynda/guarantor/Guarantor";
import AddWorkExperience2 from "./pages/mynda/workexperience2/AddWorkExperience2";
import FilterLocation from "./pages/mynda/filterlocation/FilterLocation";
import LabTest2 from "./pages/mynda/labTest2/LabTest2";
import AddCardMynda from "./pages/mynda/addmynda/AddCardMynda";
import SelectMethod from "./pages/mynda/selectpaymentmethod/SelectMethod";
import ProfileDetail from "./pages/mynda/profiledetails/ProfileDetail";
import PrivacyPolicy from "./pages/mynda/privacypolicy/PrivacyPolicy";
import TermsCondition2 from "./pages/mynda/termscondition/TermsCondition";
import AppliedJobs from "./pages/mynda/appliedjobs/AppliedJobs";
import AboutUs from "./pages/mynda/aboutus/AboutUs";
import Support from "./pages/mynda/support/Support";
import TrainingCertification from "./pages/mynda/trainingcertification/TrainingCertification";
import MountainMaid from "./pages/mynda/mountainmaid/MountainMaid";
import AddCardMynda2 from "./pages/mynda/addmynda2/AddCardMynda2";
import SelectMethod2 from "./pages/mynda/selectpaymentmethod2/SelectMethod2";
import InternationalFood from "./pages/mynda/internationalfoodcourse/InternationalFood";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Onboarding1 />}></Route>
          <Route path="/onboarding_2" element={<Onboarding2 />}></Route>
          <Route path="/onboarding_3" element={<Onboarding3 />}></Route>
          <Route path="/roles" element={<Roles />}></Route>
          <Route path="/employer/signup" element={<Signup />}></Route>
          <Route path="/employer/login" element={<Login />}></Route>
          <Route path="/employer/home" element={<HomePage />}></Route>
          <Route path="/employer/message" element={<Message />}></Route>
          <Route
            path="/employer/notification"
            element={<Notification />}
          ></Route>
          <Route path="/employer/agencies" element={<Agency />}></Route>
          <Route
            path="/employer/service_category"
            element={<ServiceCategory />}
          ></Route>
          <Route path='/mynda/createaccount' element={<MyndaForm />}></Route>
          <Route path='/mynda/aboutyourself' element={<AboutYourself />}></Route>
          <Route path='/mynda/addeducation' element={<AddEducation />}></Route>
          <Route path= '/mynda/editworkexperience' element={<EditWorkX />}></Route>
          <Route path= '/mynda/workexperience' element={<WorkExperience />}></Route>
          <Route path= '/mynda/verifyotp' element={<VerifyOTP />}></Route>
          <Route path= '/agent/verifyotp' element={<VerifyAgentOTP />}></Route>
          <Route path= '/mynda/uploadproof' element={<UploadProof />}></Route>
          <Route path= '/mynda/terms' element={<TermsCondition />}></Route>
          <Route path= '/agent/terms' element={<TermsConditionAgent />}></Route>
          <Route path= '/mynda/resetpassword' element={<ResetPassword />}></Route>
          <Route path= '/agent/resetpassword' element={<ResetPasswordAgent />}></Route>
          <Route path= '/mynda/newpassword' element={<NewPassword />}></Route>
          <Route path= '/agent/newpassword' element={<NewPasswordAgent />}></Route>
          <Route path= '/mynda/login' element={<MyndaLogin />}></Route>
          <Route path= '/agent/login' element={<AgentLogin />}></Route>
          <Route path= '/mynda/congrat' element={<Congrat />}></Route>
          <Route path= '/agent/congrat' element={<CongratAgent />}></Route>
          <Route path= '/agent/addcardagent' element={<AddCard />}></Route>
          <Route path= '/agent/addshareholder' element={<AddShareHolder />}></Route>
          <Route path= '/agent/createaccount' element={<AgentForm />}></Route>
          <Route path= '/agent/bookinspection' element={<BookInspection />}></Route>
          <Route path= '/agent/companyinfo' element={<CompanyInfo />}></Route>
          <Route path= '/agent/editshareholder' element={<EditShareHolder />}></Route>
          <Route path= '/agent/jobapplication' element={<JobApplication />}></Route>
          <Route path= '/agent/trainingschool' element={<TrainingSchool />}></Route>
          <Route path="/laboratory/home" element={<LabHomePage />}></Route>
          <Route path="/employer/verify" element={<VerifyNumber />}></Route>
          <Route path="/laboratory/signup" element={<LabSignup />}></Route>
          <Route path="/laboratory/home" element={<LabHomePage />}></Route>
          <Route path="/agent/personaldetails" element={<PersonalDetails />}></Route>
          <Route path="/mynda/homepage" element={<MyndaHomePage />}></Route>
          <Route path="/mynda/verification" element={<Verification />}></Route>
          <Route path="/mynda/policeverification" element={<PoliceVerification />}></Route>
          <Route path="/mynda/labtest" element={<LabTest />}></Route>
          <Route path="/mynda/passwordresetsuccessful" element={<Congrat2 />}></Route>
          <Route path="/agent/passwordresetsuccessful" element={<CongratAgent2 />}></Route>
          <Route path="/mynda/message" element={<MessageMynda />}></Route>
          <Route path="/mynda/notification" element={<NotificationMynda />}></Route>
          <Route path="/mynda/jobcategory" element={<JobCategory />}></Route>
          <Route path="/mynda/maids-helps" element={<MaidsHelp />}></Route>
          <Route path="/mynda/jobs" element={<Jobs />}></Route>
          <Route path="/mynda/savedjobs" element={<SavedJobs />}></Route>
          <Route path="/mynda/more" element={<More />}></Route>
          <Route path="/mynda/wallet" element={<Wallet />}></Route>
          <Route path="/mynda/lodgecomplain" element={<LodgeComplain />}></Route>
          <Route path="/mynda/withdrawfunds" element={<WithdrawFunds />}></Route>
          <Route path="/mynda/sendfunds" element={<SendFunds />}></Route>
          <Route path="/mynda/topupwallet" element={<TopUpWallet />}></Route>
          <Route path="/mynda/location" element={<Location />}></Route>
          <Route path="/mynda/jobdetails" element={<JobDetail />}></Route>
          <Route path="/mynda/accountsettings" element={<AccountSettins />}></Route>
          <Route path="/mynda/guarantorform" element={<Guarantor />}></Route>
          <Route path="/mynda/addworkexperience" element={<AddWorkExperience2 />}></Route>
          <Route path="/mynda/filterlocation" element={<FilterLocation />}></Route>
          <Route path="/mynda/labtest2" element={<LabTest2 />}></Route>
          <Route path="/mynda/addcardmynda" element={<AddCardMynda />}></Route>
          <Route path="/mynda/selectmethod" element={<SelectMethod />}></Route>
          <Route path="/mynda/profiledetails" element={<ProfileDetail />}></Route>
          <Route path="/mynda/privacypolicy" element={<PrivacyPolicy />}></Route>
          <Route path="/mynda/termscondition" element={<TermsCondition2 />}></Route>
          <Route path="/mynda/appliedjobs" element={<AppliedJobs />}></Route>
          <Route path="/mynda/aboutus" element={<AboutUs />}></Route>
          <Route path="/mynda/support" element={<Support />}></Route>
          <Route path="/mynda/training" element={<TrainingCertification />}></Route>
          <Route path="/mynda/mountainmaid" element={<MountainMaid />}></Route>
          <Route path="/mynda/addcardmynda2" element={<AddCardMynda2 />}></Route>
          <Route path="/mynda/selectmethod2" element={<SelectMethod2 />}></Route>
          <Route path="/mynda/internationalfoodcourse" element={<InternationalFood />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
