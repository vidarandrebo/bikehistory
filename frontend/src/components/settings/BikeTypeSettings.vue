<template>
    <div class="setting-wrapper">
        <div class="settings">
            <h2>Add Bike Type</h2>
            <form id="addBikeType" method="POST" v-on:submit.prevent="addType">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" v-model="equipmentTypeSettings.name" required>
                <input type="submit" value="Add Type">
            </form>
        </div>
        <div class="settings">
            <h2>Bike Types</h2>
            <p v-for="type in bikeTypes" :key="type.id">{{ type.name }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {EquipmentType, getTypeRequest, IEquipmentType} from "@/models/equipmentTypes/equipmentType";
import {Category} from "@/models/equipmentTypes/category";

export default defineComponent({
    name: "BikeTypeSettings",
    data: function () {
        return {
            equipmentTypeSettings: new EquipmentType(),
            equipmentTypes: [] as Array<IEquipmentType>,
        }
    },
    methods: {
        addType: async function () {
            let result = await this.equipmentTypeSettings.addTypeRequest();
            if (result.status == 201) {
                this.equipmentTypeSettings.clear();
            }
            await this.getTypes();
        },
        getTypes: async function () {
            this.equipmentTypes = await getTypeRequest();
        }
    },
    computed: {
        bikeTypes(): Array<IEquipmentType> {
            return this.equipmentTypes.filter(t => t.category == Category.Bike);
        }
    },
    async created() {
        await this.getTypes();
    }

})
</script>

<style scoped>
.setting-wrapper {
    flex-grow: 1;
}

.settings, .bike-types {
    background-color: beige;
    margin: 0.5rem 0.5rem 0.5rem 0.25rem;
    padding: 1rem;

}

form {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
}

</style>