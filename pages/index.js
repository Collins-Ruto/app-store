import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
// import {GetApps} from '../services'
import { submitApps } from "../services";

const Home = ({apps}) => {

  const data = {"rating": 4.209892749786377, "package_name": "com-activision-callofduty-shooter", "screenshots": ["https://play-lh.googleusercontent.com/NNpr7aoPdN-c2Ws7rS1d6e68lS-vsQpJx6m9kMYbrliKQIsEIP0bq_iXQze4LA9ONK4Z=w526-h296-rw", "https://play-lh.googleusercontent.com/LcF0AbfBPOkB9qPPQ_NmKQ920JW96gMwFMTlMSBfkCT2OEBiMy7EVwVgKBgazisJxmM=w526-h296-rw", "https://play-lh.googleusercontent.com/PpkT08YI6vVXzSXX6GnCdYR_TTmU8LfX0zjpPdAj8p7dF-iKaKv_TaSD_AehbQgnVF8=w526-h296-rw", "https://play-lh.googleusercontent.com/H2eNk-M1N05HmW0hDcJxX3k6A8DFxzuVY47fM_g1R_DzMwTBZ4qrudiTFfJDYpxNMCY=w526-h296-rw", "https://play-lh.googleusercontent.com/JTjLtudDeXrOMA2DVxDOQ9BdSK3XJ7SVUyM0gY6JBMnBNDTom956HjQlMtF448rBC28=w526-h296-rw", "https://play-lh.googleusercontent.com/QPSUzPR7NjPbL8t2K6t8FOZ5kFH9GuXKNOsbHqcDrFXvYICkf4NBzGIakBm-vSRzo_0=w526-h296-rw", "https://play-lh.googleusercontent.com/t5oeiArOj1ud5N_FcP_rb4EDW1Jfb9hdduZymL3HPeqihlnEEChx0-vrBctx-NyS1Oo=w526-h296-rw", "https://play-lh.googleusercontent.com/c0WQhePAIH5bO2Kio0b4wxuyz2P-RM5vjekoZpqUgSbaeN0nkjW37nne3wuocPk34S0h=w526-h296-rw", "https://play-lh.googleusercontent.com/PL4Hrz_DWEYs5hzx3VRuLYjmyWNz_L7igbcVO-DDc3KLlMz7WZKQiDOF0BrNAK35k9s=w526-h296-rw", "https://play-lh.googleusercontent.com/GbABY27oX6mOGyytTITk08Z83Vl3xjrfdyIi3ncgOK29rmSw95N5SbGdjF_RWDbV-ag=w526-h296-rw", "https://play-lh.googleusercontent.com/P-rGNi8-lxyznOtwvy6AOuUMxwRTrx7aSEqGGX5kqZwG0J4tOnDHt2wDC_C4Gr3-p6U=w526-h296-rw", "https://play-lh.googleusercontent.com/znlwLmE2UjSXZRn36zJhW-OcpAmvzF6PSXPog6ULceD9ykE8FK1khAsv1K_FmLcXApo=w526-h296-rw", "https://play-lh.googleusercontent.com/hTYFmNO52HKvgcfY0lV_hpDeJTa1Nit1jza0lMLv9rRsLO8MM8nRxC6vkDsM9U7dBMs=w526-h296-rw", "https://play-lh.googleusercontent.com/Pl8jSwKupDJa-gTGVLWkXliKsqqA9_y_Uzn4SCDAm-REhdTj7GQqacjqLRp_dl3Qng=w526-h296-rw", "https://play-lh.googleusercontent.com/7Ax9G6LldDT8uruHGfIZQSakKEP-cS2TVw-GWbfpGj8oPcMPfK21AbfStH1tPvLwww=w526-h296-rw", "https://play-lh.googleusercontent.com/ANuB43lFkgcsjilFvDXRXT6CGJiPuSGkF6UwDLcMolDFkeqkFeCbUQB2TLKUfJofUg=w526-h296-rw", "https://play-lh.googleusercontent.com/ue8nVMIuPvaDPjz0JbXebNw1tE9ijPrHgfy2lUfpqz4ym_4toxqfN1bqz4ZOUwEyr7L6=w526-h296-rw", "https://play-lh.googleusercontent.com/JOioxgm5rP2MwpzRuFQeuZOodSee_RyIan9qVAc_7f-jIgwuFjzmeMecNwKgSLMGchLT=w526-h296-rw", "https://play-lh.googleusercontent.com/oUknw6ado-wY8yZhVOsS7S0UPlXHoTfC-NLP-6k6TFeJzYEBQquaQPka9yDjcWRkhK8=w526-h296-rw", "https://play-lh.googleusercontent.com/s4Wr6POkSXMGtlwY7Y09h8-dkATec5Es7H05v5vkHDnD9YQnYHVxh3CDzRbj0cvpQA=w526-h296-rw", "https://play-lh.googleusercontent.com/BBCVAUzpGHX4uKaVy9taZQ0iV1APUKjqWNexkiOeWr4joVEVUaDcpu_EG4Un82PrC5Y=w526-h296-rw"], "badges": [], "developer": "Activision Publishing, Inc.", "price_currency": "$", "icon_72": "https://play-lh.googleusercontent.com/WjXoRzJKWHJ_x52qWYA6ECM70bq3x0vwwYiBhzLXdOIHCo-obdUTztPbskEn0K8_wBs=s72-rw", "title": "Call of Duty Mobile Season 9", "interactive_elements": ["Users Interact", "In-Game Purchases"], "iap_max": 99.99, "privacy_policy": "https://www.activision.com/legal/privacy-policy", "category": "Action", "version_code": 14421, "version": "1.0.34", "size": 2317316347, "cat_int": 32, "created": "2019-09-30T00:00:00+00:00", "market_update": "2022-07-28T00:00:00+00:00", "market_url": "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter", "cat_key": "GAME_ACTION", "downloads": "100M+", "cat_keys": ["GAME_ACTION", "GAME"], "from_developer": [], "iap": true, "website": "http://www.activision.com", "promo_video": "https://play.google.com/video/lava/web/player/yt:movie:xLVHWbHmKk0?autoplay=1&embed=play", "content_descriptors": ["Blood", "Strong Language", "Violence"], "what_is_new": "As the full moon rises over Haunted Hacienda, an eerie, spine-chilling feeling returns to Call of Duty: Mobile Season 9: ZOMBIES ARE BACK! Drop anchor & plunder with Zero – Dark Sails & the ICR-1 - Death Ahoy or defend against the onslaught of the undead as zombies rally once more. Battle beside sinister forces as Dark Shepherd - Arctic Death with the cold blooded Krig 6 - Ice Drake. Can you survive, or will you be scared stiff on the plank?", "number_ratings": 15289119, "similar": ["com.blitzteam.battleprime", "com.ea.gp.apexlegendsmobilefps", "com.pubg.newstate", "com.edkongames.mobs", "com.netease.sheltergp", "com.tencent.ig"], "screenshots_count": 21, "market_status": "PUBLISHED", "price_numeric": 0.0, "short_desc": "PVP, BR, Shooter, Shooting, Zombies, Multiplayer, Teams, Fun, FPS, Gunsmith, BP", "downloads_max": 500000000, "contains_ads": true, "description": "\"The CALL OF DUTY® you know and love now on your mobile device. With multiplayer (MP) modes such as Team Deathmatch, Domination, and Kill-Confirmed on iconic maps such as Shipment, Raid, and Standoff, as well as 100 player Battle Royale (BR), CALL OF DUTY®: MOBILE has it all! Play Multiplayer (MP) and Battle Royale (BR)!\n\nDOWNLOAD FOR FREE TODAY\n\nCALL OF DUTY®: MOBILE boasts console quality HD gaming on your phone with customizable and intuitive controls, voice and text chat with your friends, and thrilling 3D graphics and sound. Experience this iconic franchise, now on your phone so you can play on the go. Play this FPS anywhere.\n\nNEW SEASONAL CONTENT UPDATED MONTHLY\n\nCALL OF DUTY®: MOBILE releases new content with every season with new game modes, maps, themed events and rewards so it never gets old. Every season expands upon the story in the CALL OF DUTY® universe and brings new unlockable content for everyone to enjoy. Fans will recognize many elements from Call of Duty®: Black Ops and Call of Duty®: Modern Warfare® alongside totally unique elements from CALL OF DUTY®: MOBILE. Drop into the battle today!\n\nCUSTOMIZE YOUR UNIQUE LOADOUT\n\nAs you play CALL OF DUTY®: MOBILE you will unlock and earn dozens of iconic operators, weapons, outfits, scorestreaks and new pieces of gear that can be used to customize your loadouts, allowing you to play your way. Shoot your way to victory!\n\nCOMPETITIVE AND SOCIAL PLAY\n\nGather your friends and test your mettle in competitive ranked mode or sharpen your aim in social play. Join a clan for a sense of community and earn unique rewards for participating in Clan Wars. It's fun to shoot with others!\n\nDOWNLOAD OPTIONS TO REDUCE APP SIZE\n\nDownload and play CALL OF DUTY®: MOBILE without the barrier of storage space. As part of an effort to make CALL OF DUTY®: MOBILE more accessible, the initial app download size has been reduced and additional options allow players to choose what is downloaded to experience the full game; such as HD resources, maps, weapons, and operators.\n\nHave what it takes to compete with the best? Download CALL OF DUTY®: MOBILE now!\n_________________________________________________________\nNOTE: We welcome any feedback during your experience to improve the game. To give feedback, in-game go to > Settings > Feedback > Contact Us.\n\nSubscribe for Updates! ---> profile.callofduty.com/cod/registerMobileGame\n_________________________________________________________\nNote: An internet connection is required to play this game.\n\nPlease note this app contains social features that allow you to connect and play with friends and push notifications to inform you when exciting events or new content are taking place in the game. You can choose whether or not to utilize these features.\n\n© 2021 Activision Publishing, Inc. ACTIVISION and CALL OF DUTY are trademarks of Activision Publishing, Inc. All other trademarks and trade names are the properties of their respective owners. By downloading, installing or using this App, you agree to Activision's privacy policy and terms of use, as may be updated by Activision from time to time. Please visit http://www.activision.com/privacy/en/privacy.html to view Activision's privacy policy and https://www.activision.com/legal/terms-of-use to view Activision's terms of use.", "price": "", "i18n_lang": ["en", "de", "pt-pt", "ru", "pt-br", "ja", "it", "fr", "en-gb", "fr-ca", "es", "tr"], "downloads_min": 100000000, "promo_video_image": "https://play-lh.googleusercontent.com/ZQksll1zg2TqeC34BZ30IjBUwEVg_pgBF2ceQXcgTN3h9b8zItGQolQKz9su9lG3MUk=w720-h310-rw", "icon": "https://play-lh.googleusercontent.com/WjXoRzJKWHJ_x52qWYA6ECM70bq3x0vwwYiBhzLXdOIHCo-obdUTztPbskEn0K8_wBs=s180-rw", "lang": "en", "ratings_5": 10791050, "iap_min": 0.99, "content_rating": "Mature 17+", "ratings_4": 1370394, "cat_type": 1, "ratings_2": 406614, "ratings_3": 697217, "ratings_1": 2023842}

  useEffect(() => {
    submitApps(data)
  }, [])
  
  console.log(apps)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Applate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Applications &rarr;</h1>
      </div>
      <div>
        <h1>Games &rarr;</h1>
      </div>
    </div>
  )
}

export default Home

// export async function getStaticProps() {
//   const apps = (await GetApps()) || [];

//   return {
//     props: { apps },
//   };
// }
