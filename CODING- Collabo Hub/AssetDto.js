export default class AssetDTO {
    constructor(asset) {
        this.id = asset.id;
        this.name = asset.name;
        this.type = asset.type;
        // Add more properties as needed
    }

    getAsset() {
        return {
            id: this.id,
            name: this.name,
            type: this.type
            // Map other properties accordingly
        };
    }
}