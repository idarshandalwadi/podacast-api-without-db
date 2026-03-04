"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodesController = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const episodes_service_1 = require("./episodes.service");
const check_positive_number_pipe_1 = require("../pipes/check-positive-number.pipe");
const api_key_guard_1 = require("../guards/api_key.guard");
let EpisodesController = class EpisodesController {
    constructor(episodeService) {
        this.episodeService = episodeService;
    }
    findAll(sort = 'desc', limit) {
        (0, console_1.log)(`Result count limit is set to: ${limit}`);
        return this.episodeService.findAll(sort, limit);
    }
    findOne(id) {
        (0, console_1.log)(id);
        const episode = this.episodeService.findOne(id);
        if (episode) {
            return episode;
        }
        else {
            throw new common_1.HttpException('Record Not Found', common_1.HttpStatus.NOT_FOUND);
        }
    }
    getFeatureEpisodes() {
        const featuredEpisodes = this.episodeService.getFeatureEpisodes();
        if (featuredEpisodes) {
            return featuredEpisodes;
        }
        else {
            throw new common_1.NotFoundException('Records are not found');
        }
    }
    addEpisode(inputObj) {
        console.log(inputObj);
        return this.episodeService.addEpisode(inputObj);
    }
    updateEpisode(id, updateMe) {
        (0, console_1.log)(`New Value for the object: ${JSON.stringify(updateMe)}`);
        return this.episodeService.updateEpisode(updateMe, id);
    }
    deleteEpisode(id) {
        (0, console_1.log)(`Deleted this ID: ${id}`);
        return this.episodeService.deleteEpisode(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('sort')),
    __param(1, (0, common_1.Query)('limit', new common_1.DefaultValuePipe(20), common_1.ParseIntPipe, check_positive_number_pipe_1.CheckPositiveNumberPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('featured'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "getFeatureEpisodes", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "addEpisode", null);
__decorate([
    (0, common_1.Put)('id/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "updateEpisode", null);
__decorate([
    (0, common_1.Delete)('id/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], EpisodesController.prototype, "deleteEpisode", null);
EpisodesController = __decorate([
    (0, common_1.UseGuards)(api_key_guard_1.ApiKeyGuard),
    (0, common_1.Controller)('episodes'),
    __metadata("design:paramtypes", [episodes_service_1.EpisodesService])
], EpisodesController);
exports.EpisodesController = EpisodesController;
//# sourceMappingURL=episodes.controller.js.map