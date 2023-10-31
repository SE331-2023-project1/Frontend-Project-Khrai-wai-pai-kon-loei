<template>
  <div>
    <label class="block mb-2 text-sm font-semibold text-indigo-900" for="file_input">Upload an image</label>
    <div class="flex items-center">
      <input id="file-upload" name="file-upload" type="file" @change="handleFileChange" class="sr-only">
      <button @click="uploadFile" class="ml-2 bg-indigo-500 text-white py-1 px-2 rounded-md hover:bg-indigo-700 focus:outline-none text-base">Upload</button>
    </div>
    <div id="status" class="mt-2 text-sm text-green-700 font-semibold">{{ statusMessage }}</div>
  </div>
</template>

<script>
import { ref, defineProps, defineEmits } from "vue";

export default {
  data() {
    return {
      selectedFile: null,
      statusMessage: "",
      mediaURLs: [], // Store media URLs in an array
    };
  },
  methods: {
    handleFileChange(event) {
      // Check if the selected file is an image before proceeding
      if (event.target.files[0].type.startsWith('image/')) {
        this.selectedFile = event.target.files[0];
        this.statusMessage = "";
      } else {
        this.selectedFile = null;
        this.statusMessage = "Please select a valid image file.";
      }
    },
    uploadFile() {
      if (!this.selectedFile) {
        this.statusMessage = "Please select only an image to upload.";
        return;
      }

      const formData = new FormData();
      formData.append("file", this.selectedFile);

      fetch("http://localhost:8080/uploadFile", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`File upload failed: ${response.status} - ${response.statusText}`);
          }
          return response.text(); // Extract the response as text (media URL)
        })
        .then((mediaURL) => {
          this.statusMessage = `File uploaded successfully.`;
          this.mediaURLs.push(mediaURL); // Add the URL to the mediaURLs array
          this.$emit("fileUploaded", this.mediaURLs); // Emit the array of URLs
          console.log(mediaURL)
        })
        .catch((error) => {
          this.statusMessage = error.message;
        });
    },
  },
};

const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(["update:modelValue", "imageUploaded"]);

const handleFileChange = (event) => {
  // หลังจากอัปโหลดรูปภาพ
  // อัพโหลดรูปภาพและรับ URL จากการอัพโหลด
  const imageURL = uploadAndReceiveURL(event.target.files[0]);

  // ส่ง URL กลับไปยัง createAnnouncement ผ่าน emit
  emits.imageUploaded(imageURL);
};
</script>
