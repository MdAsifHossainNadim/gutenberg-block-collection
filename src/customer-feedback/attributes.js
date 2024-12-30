const attributes = {
    clientSayItems: {
        type: "array",
        default: [
            {
                id: 1,
                descText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nunc nec nunc.',
                authorText: 'Mohammad Hossain',
                designation: 'Director & Prayer Connect',
                authorImg: '',
                companyLogo: '',
            }
        ]
    },
    testimonial_number: {
		type: 'number',
		default: 1,
	},
    navigationShow: {
        type: 'boolean',
        default: true
    },
    autoplay: {
        type: 'boolean',
        default: false
    }
    
};

export default attributes;