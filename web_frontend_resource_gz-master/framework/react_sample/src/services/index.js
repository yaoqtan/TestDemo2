import appFetch from "../utils/fetch-proxy";

export default {
    /*
     * @method getAppData
     * @return {Promise}
     * @desc Get global app data
     */
    getAppData(params) {
        return appFetch.get("", params);
    },

    // /*
    //  * @method postContactForm
    //  * @return {Promise}
    //  * @desc Submit contact form
    //  */
    // postContactForm(params) {
    //     return appFetch.post('contact/', params);
    // },
    //
    // /*
    //  * @method getUserIp
    //  * @return {Promise}
    //  * @desc Get location by user ip
    //  */
    // getUserIp() {
    //     return appFetch.get("https://ipapi.co/json/")
    // }
};