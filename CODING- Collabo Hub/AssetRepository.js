import db from '../../db'; // Assuming this is your database connection

export const AssetRepository = {
    getAllAssets() {
        return db.assets.findAll();
    },
    getAssetById(assetId) {
        return db.assets.findByPk(assetId);
    },
    saveAsset(assetData) {
        return db.assets.create(assetData);
    },
    updateAsset(assetId, assetData) {
        return db.assets.update(assetData, {
            where: { id: assetId }
        });
    },
    deleteAsset(assetId) {
        return db.assets.destroy({
            where: { id: assetId }
        });
    }
};