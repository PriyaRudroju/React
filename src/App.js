import React from "react";  //importing react
import ReactDOM from "react-dom/client";  //importing react dom
import Header from "./components/Header"; //importing Header component
import Body from "./components/Body"; //importing Body component


const resObj = {
                        "id": "495772",
                        "name": "Cafe Niloufer",
                        "city": "3",
                        "slugs": {
                          "restaurant": "café-niloufer-himayath-nagar-himayath-nagar",
                          "city": "hyderabad"
                        },
                        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/b56332d3-d749-4b94-b9f3-7e575b8d0ca5_495772.jpg",
                        "address": "M/S. ABR CAFE AND BAKERS PRIVATE LIMITED, 3-5-900, Old MLA Quarters Road, HimayathNagar, Hyderabad-Central Zone, Telangana-500029.",
                        "locality": "Old Mla Quarters Road",
                        "areaName": "Himayatnagar",
                        "costForTwo": "40000",
                        "costForTwoMessage": "₹400 FOR TWO",
                        "cuisines": [
                          "Bakery",
                          "Beverages",
                          "Snacks",
                          "Desserts"
                        ],
                        "avgRating": 4.7,
                        "feeDetails": {

                        },
                        "avgRatingString": "4.7",
                        "totalRatingsString": "26K+",
                        "deliveryTime": 20,
                        "sla": {
                          "deliveryTime": 20,
                          "minDeliveryTime": 15,
                          "maxDeliveryTime": 20,
                          "lastMileTravel": 1.5,
                          "serviceability": "SERVICEABLE",
                          "rainMode": "RAIN_MODE_NONE",
                          "slaString": "15-20 MINS",
                          "lastMileTravelString": "1.5 km",
                          "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                          "opened": true,
                          "restaurantClosedMeta": {

                          }
                        },
                        "badges": {
                          "imageBadges": [
                            {
                              "imageId": "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                              "description": "Delivery!"
                            }
                          ]
                        },
                        "aggregatedDiscountInfoV3": {
                          "header": "10% OFF",
                          "subHeader": "ABOVE ₹3000",
                          "discountTag": "FLAT DEAL",
                          "logoCtx": {
                            "text": "BENEFITS"
                          }
                        },
                        "ratingSlab": "RATING_SLAB_5",
                        "orderabilityCommunication": {
                          "title": {

                          },
                          "subTitle": {

                          },
                          "message": {

                          },
                          "customIcon": {

                          },
                          "commsStyling": {

                          }
                        },
                        "cartOrderabilityNudgeBanner": {
                          "parameters": {

                          },
                          "presentation": {

                          }
                        },
                        "externalRatings": {
                          "aggregatedRating": {
                            "rating": "--"
                          }
                        },
                        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                        "featuredSectionInfo": {
                          "sectionTitle": "More"
                        }
                }




const Footer = () => {
    return (
        <div className = "footer">
            <div className = "copyright">
                <img className="copyright-logo" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVV12nOtQ1jvKtWhM-MxF52o_M7ExsvSKnFg&s" alt="logo" />
                

            </div>

            <div className = "footer-items">
                <ul>
                   <li>Links</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Follow us</li>
                   
                   
                </ul>
            </div>
        </div>
        
    );
};
const AppLayout = () => {
return (
    <div className="app"> 
    <Header/>
    <Body/>
    <Footer/>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root")); //creating a root element
root.render(<AppLayout />); //rendering the AppLayout component inside the root element 