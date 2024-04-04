import { AssetRepository } from '../repository/AssetRepository';
import AssetDTO from '../dto/AssetDTO';

export const AssetServiceImplement = {
    getAllAssets() {
        return AssetRepository.getAllAssets();
    },
    getAssetById(assetId) {
        return AssetRepository.getAssetById(assetId);
    },
    saveAsset(asset) {
        const assetDTO = new AssetDTO(asset);
        const assetData = assetDTO.getAsset();
        return AssetRepository.saveAsset(assetData);
    },
    updateAsset(assetId, asset) {
        const assetDTO = new AssetDTO(asset);
        const assetData = assetDTO.getAsset();
        return AssetRepository.updateAsset(assetId, assetData);
    },
    deleteAsset(assetId) {
        return AssetRepository.deleteAsset(assetId);
    }};