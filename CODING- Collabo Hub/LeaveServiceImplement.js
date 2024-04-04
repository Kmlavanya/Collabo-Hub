import { LeaveRepository } from '../repository/LeaveRepository';
import LeaveDTO from '../dto/LeaveDTO';
export const LeaveServiceImplement = {
    getAllLeaves() {
        return LeaveRepository.getAllLeaves();
    },
    getLeaveById(leaveId) {
        return LeaveRepository.getLeaveById(leaveId);
    },
    saveLeave(leave) {
        const leaveDTO = new LeaveDTO(leave);
        const leaveData = leaveDTO.getLeave();
        return LeaveRepository.saveLeave(leaveData);
    },
    updateLeave(leaveId, leave) {
        const leaveDTO = new LeaveDTO(leave);
        const leaveData = leaveDTO.getLeave();
        return LeaveRepository.updateLeave(leaveId, leaveData);
    },
    deleteLeave(leaveId) {
        return LeaveRepository.deleteLeave(leaveId);
    }
};