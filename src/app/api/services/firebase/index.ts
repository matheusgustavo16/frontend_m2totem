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
  getDoc,
  limit,
  where,
  getCountFromServer
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
    // console.log("GetCampaign", querySnapshot);
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
    return campaigns.reverse();
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

export const GetDownloadPicture = async (docId: string) => {
  try {
    const campaignCollection = doc(db, "pictures", docId);
    const querySnapshot: any = await getDoc(campaignCollection);
    console.log("GetDownloadPicture", querySnapshot);
    return querySnapshot._document.data.value.mapValue.fields;
  } catch (err) {
    console.log("GetDownloadPictureError", err);
  }
};

export const DownloadPicture = async (data: any) => {
  try {
    const campaignCollection = collection(db, "downloads");
    const querySnapshot = await addDoc(campaignCollection, { ...data });
    // console.log("DownloadPicture", querySnapshot);
    return querySnapshot ? querySnapshot.id : null;
  } catch (err) {
    console.log("DownloadPictureError", err);
  }
};

/* STATS */

export const GetStatsDashboard = async () => {
  try {
    // campanhas
    const campaignCollection = collection(db, "campaigns");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"))
    );
    const campaigns: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      campaigns.push({ id: doc.id, ...campdata });
    });
    // stations
    const stationsCollection = collection(db, "stations");
    const querySnapshotStation = await getDocs(
      query(stationsCollection, orderBy("createdAt", "desc"))
    );
    const stations: any = [];
    querySnapshotStation.forEach(doc => {
      const campdata = doc.data();
      stations.push({ id: doc.id, ...campdata });
    });
    // pictures
    const picturesCollection = collection(db, "pictures");
    const querySnapshotPic = await getDocs(
      query(picturesCollection, orderBy("createdAt", "desc"))
    );
    const pictures: any = [];
    querySnapshotPic.forEach(doc => {
      const campdata = doc.data();
      pictures.push({ id: doc.id, ...campdata });
    });
    // RETURN STATS
    return {
      countCampaigns: campaigns.length || 0,
      countStations: stations.length || 0,
      countPictures: pictures.length || 0
    };
  } catch (err) {
    console.log("GetCampaignsError", err);
  }
};

export const GetFeedDashboard = async () => {
  try {
    // campanhas
    const campaignCollection = collection(db, "campaigns");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"), limit(25))
    );
    const campaigns: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      campaigns.push({
        id: doc.id,
        date: new Date(campdata.createdAt),
        type: "campaigns",
        ...campdata
      });
    });
    // stations
    const stationsCollection = collection(db, "stations");
    const querySnapshotStation = await getDocs(
      query(stationsCollection, orderBy("createdAt", "desc"), limit(25))
    );
    const stations: any = [];
    querySnapshotStation.forEach(doc => {
      const campdata = doc.data();
      stations.push({
        id: doc.id,
        date: new Date(campdata.createdAt),
        type: "stations",
        ...campdata
      });
    });
    // pictures
    const picturesCollection = collection(db, "pictures");
    const querySnapshotPic = await getDocs(
      query(picturesCollection, orderBy("createdAt", "desc"), limit(25))
    );
    const pictures: any = [];
    querySnapshotPic.forEach(doc => {
      const campdata = doc.data();
      pictures.push({
        id: doc.id,
        date: new Date(campdata.createdAt),
        type: "pictures",
        ...campdata
      });
    });
    // RETURN STATS
    const reorder = [...campaigns, ...stations, ...pictures].sort(
      (objA, objB) => Number(objB.date) - Number(objA.date)
    );
    return reorder;
  } catch (err) {
    console.log("GetCampaignsError", err);
  }
};

/* STATIONS */

export const AddStation = async (data: any) => {
  try {
    const stationsCollection = collection(db, "stations");
    // before add, verify postcode and redirect
    let token = null;
    try {
      const findPostcode = await getDocs(
        query(stationsCollection, where("postcode", "==", data.postcode))
      );
      const station: any = [];
      findPostcode.forEach(doc => {
        const campdata = doc.data();
        station.push({ id: doc.id, ...campdata });
      });
      // console.log("station", station);
      token = station[0].id;
    } catch (err) {
      console.log("findPostcodeError", err);
    }
    if (token) return token;
    // follow up
    if (!token) {
      const querySnapshot = await addDoc(stationsCollection, { ...data });
      // console.log("AddStation", querySnapshot);
      return querySnapshot ? querySnapshot.id : null;
    }
  } catch (err) {
    console.log("AddStationError", err);
  }
};

export const GetStations = async () => {
  try {
    const campaignCollection = collection(db, "stations");
    const querySnapshot = await getDocs(
      query(campaignCollection, orderBy("createdAt", "desc"))
    );
    const stations: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      stations.push({
        id: doc.id,
        ...campdata
      });
    });
    console.log("GetStations", stations);
    return stations;
  } catch (err) {
    console.log("GetStationsError", err);
  }
};

export const GetStation = async (docId: string) => {
  try {
    const campaignCollection = doc(db, "stations", docId);
    const querySnapshot: any = await getDoc(campaignCollection);
    // console.log("GetStation", querySnapshot);
    return querySnapshot._document.data.value.mapValue.fields;
  } catch (err) {
    console.log("GetStationError", err);
  }
};

export const GetStationPictures = async (stationId: string) => {
  try {
    const campaignCollection = collection(db, "pictures");
    const querySnapshot = await getDocs(
      query(campaignCollection, where("stationId", "==", stationId))
    );
    const stations: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      stations.push({
        id: doc.id,
        ...campdata
      });
    });
    console.log("GetStationPictures", stations);
    return stations;
  } catch (err) {
    console.log("GetStationPicturesError", err);
  }
};

/* REPORTS */

export const GetReportsByDate = async (
  date: string,
  campaignId: string | null
) => {
  try {
    // COUNT PICTURES
    const campaignCollection = collection(db, "pictures");
    const querySnapshot = await getDocs(query(campaignCollection));
    const pictures: any = [];
    querySnapshot.forEach(doc => {
      const campdata = doc.data();
      if (campdata.createdAt.substr(0, 10) === date) {
        if (!campaignId || campdata.campaignId === campaignId) {
          pictures.push({
            id: doc.id,
            ...campdata
          });
        }
      }
    });
    // COUNT DONWLOADS
    const downloadCollection = collection(db, "downloads");
    const queryDownloads = await getDocs(query(downloadCollection));
    const downloads: any = [];
    queryDownloads.forEach(doc => {
      const campdata = doc.data();
      if (campdata.createdAt.substr(0, 10) === date) {
        if (!campaignId || campdata.campaignId === campaignId) {
          downloads.push({
            id: doc.id,
            ...campdata
          });
        }
      }
    });

    // console.log("GetReportsByDate", pictures);
    let _hourFlow: any = [];
    pictures.map((pic: any) => {
      const hour = pic.createdAt.substr(11, 2);
      _hourFlow[hour] = _hourFlow[hour] ? _hourFlow[hour] + 1 : 1;
    });
    // console.log("_hourFlow", _hourFlow);
    return {
      countPictures: pictures.length || 0,
      countDownloads: downloads.length || 0,
      hourFlow: _hourFlow
    };
  } catch (err) {
    console.log("GetReportsByDateError", err);
  }
};
