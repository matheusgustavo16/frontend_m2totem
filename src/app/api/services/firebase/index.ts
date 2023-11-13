import { db } from "@/utils/firebase";
import firebase from "firebase/compat/app";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
  doc,
  updateDoc,
  getDoc
} from "firebase/firestore";

/* CAMPAIGNS */

export const GetCampaigns = async () => {
  try {
    const campaignCollection = collection(db, "campaigns");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"))
    );
    const campaigns: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      campaigns.push({ id: doc.id, ...campdata });
    });
    console.log("GetCampaigns", campaigns);
    return campaigns;
  } catch (err) {
    console.log("GetCampaignsError", err);
  }
};

export const GetCampaign = async (docId: string) => {
  try {
    const campaignCollection = doc(db, "campaigns", docId);
    const querySnapshot: any = await getDoc(campaignCollection);
    console.log("GetCampaign", querySnapshot);
    return querySnapshot._document.data.value.mapValue.fields;
  } catch (err) {
    console.log("GetCampaignError", err);
  }
};

export const AddCampaign = async (data: any) => {
  try {
    const campaignCollection = collection(db, "campaigns");
    const querySnapshot = await addDoc(campaignCollection, { ...data });
    console.log("AddCampaign", querySnapshot);
    return querySnapshot ? querySnapshot.id : null;
  } catch (err) {
    console.log("AddCampaignError", err);
  }
};

export const UpdateCampaign = async (docId: string, data: any) => {
  try {
    const docCollection = doc(db, "campaigns", docId);
    const querySnapshot = await updateDoc(docCollection, { ...data });
    console.log("UpdateCampaign", querySnapshot);
    return querySnapshot;
  } catch (err) {
    console.log("UpdateCampaignError", err);
  }
};

export const DeleteCampaign = async (docId: string) => {
  try {
    const docCollection = doc(db, "campaigns", docId);
    const querySnapshot = await deleteDoc(docCollection);
    console.log("DeleteCampaign", querySnapshot);
    return querySnapshot;
  } catch (err) {
    console.log("DeleteCampaignError", err);
  }
};

/* TEMPLATES */

export const GetTemplates = async (campaignId: string) => {
  try {
    const campaignCollection = collection(db, "templates");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"))
    );
    const campaigns: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      // console.log("GetTemplates[template]", campaigns);
      if (campaignId === campdata.campaign_id) {
        campaigns.push({ id: doc.id, ...campdata });
      }
    });
    // console.log("GetTemplates", campaigns);
    return campaigns;
  } catch (err) {
    console.log("GetTemplatesError", err);
  }
};

export const AddTemplate = async (data: any) => {
  try {
    const campaignCollection = collection(db, "templates");
    const querySnapshot = await addDoc(campaignCollection, { ...data });
    console.log("AddTemplate", querySnapshot);
    return querySnapshot ? querySnapshot.id : null;
  } catch (err) {
    console.log("AddTemplateError", err);
  }
};

export const DeleteTemplate = async (docId: string) => {
  try {
    const docCollection = doc(db, "templates", docId);
    const querySnapshot = await deleteDoc(docCollection);
    console.log("DeleteTemplate", querySnapshot);
    return querySnapshot;
  } catch (err) {
    console.log("DeleteTemplateError", err);
  }
};

/* PHRASES */

export const GetPhrases = async (campaignId: string) => {
  try {
    const campaignCollection = collection(db, "phrases");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"))
    );
    const campaigns: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      // console.log("GetTemplates[template]", campaigns);
      if (campaignId === campdata.campaign_id) {
        campaigns.push({ id: doc.id, ...campdata });
      }
    });
    // console.log("GetPhrases", campaigns);
    return campaigns;
  } catch (err) {
    console.log("GetPhrasesError", err);
  }
};

export const AddPhrases = async (data: any) => {
  try {
    const campaignCollection = collection(db, "phrases");
    const querySnapshot = await addDoc(campaignCollection, { ...data });
    console.log("AddPhrases", querySnapshot);
    return querySnapshot ? querySnapshot.id : null;
  } catch (err) {
    console.log("AddPhrasesError", err);
  }
};

export const DeletePhrases = async (docId: string) => {
  try {
    const docCollection = doc(db, "phrases", docId);
    const querySnapshot = await deleteDoc(docCollection);
    console.log("DeletePhrases", querySnapshot);
    return querySnapshot;
  } catch (err) {
    console.log("DeletePhrasesError", err);
  }
};

/* QR CODES */

export const AddQrPicture = async (data: any) => {
  try {
    const campaignCollection = collection(db, "pictures");
    const querySnapshot = await addDoc(campaignCollection, { ...data });
    // console.log("AddQrPicture", querySnapshot);
    return querySnapshot ? querySnapshot.id : null;
  } catch (err) {
    console.log("AddQrPictureError", err);
  }
};
