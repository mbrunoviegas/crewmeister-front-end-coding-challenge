import api from '../Api'

class AbsencesService {
    getAbsences = async (userId, startDate, endDate) => {
        const params = {};

        if (userId) {
            params.userId = userId
        } else if (startDate && endDate) {
            params.startDate = startDate
            params.endDate = endDate
        }

        const reponse = await api.get("", { params })
        return reponse.data
    }

    getICalendarAbsences = async () => {
        const response = await api.get("/download");
        return response.data
    }
}

export default AbsencesService;