import { ondutyRepository } from '../repository/ondutyRepository';
import ondutyDTO from '../dto/ondutyDTO';
export const ondutyServiceImplement = {
    getAllOnduties() {
        return ondutyRepository.getAllOnduties();
    },
    getOndutyById(ondutyId) {
        return ondutyRepository.getOndutyById(ondutyId);
    },
    saveOnduty(onduty) {
        const ondutyDTO = new ondutyDTO(onduty);
        const ondutyData = ondutyDTO.getOnduty();
        return ondutyRepository.saveOnduty(ondutyData);
    },
    updateOnduty(ondutyId, onduty) {
        const ondutyDTO = new ondutyDTO(onduty);
        const ondutyData = ondutyDTO.getOnduty();
        return ondutyRepository.updateOnduty(ondutyId, ondutyData);
    },
    deleteOnduty(ondutyId) {
        return ondutyRepository.deleteOnduty(ondutyId);
    }
};