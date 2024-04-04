import db from '../../db'; // Assuming this is your database connection
export const LeaveRepository = {
    getAllLeaves() {
        return db.leaves.findAll();
    },
    getLeaveById(leaveId) {
        return db.leaves.findByPk(leaveId);
    },
    saveLeave(leaveData) {
        return db.leaves.create(leaveData);
    },
    updateLeave(leaveId, leaveData) {
        return db.leaves.update(leaveData, {
            where: { id: leaveId }
        });
    },
    deleteLeave(leaveId) {
        return db.leaves.destroy({
            where: { id: leaveId }
        });
    }
};