
<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>

		<div class="menu-toggle-wrap">
			<button class="menu-toggle item" @click="ToggleMenu">
				<span class="material-symbols-outlined">keyboard_double_arrow_right</span>
			</button>
		</div>

		<h3>Menu</h3>
		<div class="menu">
			<RouterLink :to="{name: 'home' }" class="button">
				<span class="material-symbols-outlined">home</span>
				<span class="text">Home</span>
			</RouterLink>
			<RouterLink :to="{name: 'students' }" class="button">
				<span class="material-symbols-outlined">person</span>
				<span class="text">Student</span>
			</RouterLink>
			<RouterLink :to="{name: 'teachers'}" class="button">
				<span class="material-symbols-outlined">school</span>
				<span class="text">Teacher</span>
			</RouterLink>
			<RouterLink :to="{name: 'form'}" class="button">
				<span class="material-symbols-outlined">note</span>
				<span class="text">Form</span>
			</RouterLink>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoURL from '../assets/logo.png'
import { RouterLink } from 'vue-router'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value
    localStorage.setItem("is_expanded", is_expanded.value.toString())
}
</script>

<style lang="scss" scoped>
// .material-symbols-outlined {
//       color: #9370DB; /* Set the icon color to purple */
//     }


// aside {
// 	display: flex;
// 	flex-direction: column;

// 	background-color: #FFFFFF; /* Main white background color */
// 	color: #9370DB; /* Purple pastel text color */

// 	width: calc(2rem + 32px);
// 	overflow: hidden;
// 	min-height: 100vh;
// 	padding: 1rem;

// 	transition: 0.2s ease-in-out;

// 	.flex {
// 		flex: 1 1 0%;
// 	}

// 	.logo {
//     margin-bottom: 1rem;
//     transition: transform 0.2s ease-in-out;
    
//     img {
//         min-width: 3rem;
//         max-width: 70%; /* Make the image responsive */
//         height: 100%; /* Automatically adjust the height */
//         transition: width 0.2s ease-in-out;
//     }
// }

// 	.menu-toggle-wrap {
// 		display: flex;
// 		justify-content: flex-end;
// 		margin-bottom: 1rem;

// 		position: relative;
// 		top: 0;
// 		transition: 0.2s ease-in-out;

// 		.menu-toggle {
// 			transition: 0.2s ease-in-out;
// 			.material-icons {
// 				font-size: 2rem;
// 				color: #9370DB; /* Purple pastel color */
// 				transition: 0.2s ease-out;
// 			}
			
// 			&:hover {
// 				.material-icons {
// 					color: #FF69B4; /* Pink pastel color */
// 					transform: translateX(0.5rem);
// 				}
// 			}
// 		}
// 	}

// 	h3, .button .text {
// 		opacity: 0;
// 		transition: opacity 0.3s ease-in-out;
// 	}

// 	h3 {
// 		color: #9370DB; /* Purple pastel color */
// 		font-size: 0.875rem;
// 		margin-bottom: 0.5rem;
// 		text-transform: uppercase;
// 	}

// 	.menu {
// 		margin: 0 -1rem;

// 		.button {
// 			display: flex;
// 			align-items: center;
// 			text-decoration: none;

// 			transition: 0.2s ease-in-out;
// 			padding: 0.5rem 1rem;

// 			.material-icons {
// 				font-size: 2rem;
// 				color: #9370DB; /* Purple pastel color */
// 				transition: 0.2s ease-in-out;
// 			}
// 			.text {
// 				color: #9370DB; /* Purple pastel color */
// 				transition: 0.2s ease-in-out;
// 			}

// 			&:hover {
// 				background-color: #FF69B4; /* Pink pastel color */

// 				.material-icons, .text {
// 					color: #FFFFFF; /* Main white color */
// 				}
// 			}

// 			&.router-link-exact-active {
// 				background-color: #FF69B4; /* Pink pastel color */
// 				border: 0px solid #FFFFFF; /* Main white color */

// 				.material-icons, .text {
// 					color: #FFFFFF; /* Main white color */
// 				}
// 			}
// 		}
// 	}

// 	.footer {
// 		opacity: 0;
// 		transition: opacity 0.3s ease-in-out;

// 		p {
// 			font-size: 0.875rem;
// 			color: #9370DB; /* Purple pastel color */
// 		}
// 	}

// 	&.is-expanded {
// 		width: var(--sidebar-width);

// 		.menu-toggle-wrap {
// 			top: -3rem;
			
// 			.menu-toggle {
// 				transform: rotate(-180deg);
// 			}
// 		}

// 		h3, .button .text {
// 			opacity: 1;
// 		}

// 		.button {
// 			.material-icons {
// 				margin-right: 1rem;
// 			}
// 		}

// 		.footer {
// 			opacity: 0;
// 		}
// 	}

// 	@media (max-width: 1024px) {
// 		position: absolute;
// 		z-index: 99;
// 	}
// }
</style>



