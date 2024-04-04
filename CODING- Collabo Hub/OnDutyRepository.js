import db from '../../db'; // Assuming this is your database connection
export const ondutyRepository = {
    getAllOnduties() {
        return db.onduties.findAll();
    },
    getOndutyById(ondutyId) {
        return db.onduties.findByPk(ondutyId);
    },
    saveOnduty(ondutyData) {
        return db.onduties.create(ondutyData);
    },
    updateOnduty(ondutyId, ondutyData) {
        return db.onduties.update(ondutyData, {
            where: { id: ondutyId }
        });
    },
    deleteOnduty(ondutyId) {
        return db.onduties.destroy({
            where: { id: ondutyId }
        });
    }
};