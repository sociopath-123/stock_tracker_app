testing code rabbit PR suggestions



Give me advanced examples of useState?
1. Toggling a dark mode theme:
const [isDarkMode, setIsDarkMode] = useState(false);
const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

        2. Managing a list of items:
            const [items, setItems] = useState<string[]>([]);
            const addItem = (item: string) => setItems([...items, item]);

        3. Form input handling:
            const [formData, setFormData] = useState({ name: '', email: '' });
            const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const { name, value } = e.target;
                setFormData({ ...formData, [name]: value });
            };

        4. Countdown timer:
            const [countdown, setCountdown] = useState(10);
            useEffect(() => {
                if (countdown > 0) {
                    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
                    return () => clearTimeout(timer);
                }
            }, [countdown]);

        5. Fetching data from an API:
            const [data, setData] = useState<any>(null);
            const [loading, setLoading] = useState(false);
            const fetchData = async () => {
                setLoading(true);
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
                setLoading(false);
            };

        6. Modal visibility:
            const [isModalOpen, setIsModalOpen] = useState(false);
            const openModal = () => setIsModalOpen(true);
            const closeModal = () => setIsModalOpen(false);

        7. Pagination control:
            const [currentPage, setCurrentPage] = useState(1);
            const goToNextPage = () => setCurrentPage(currentPage + 1);
            const goToPreviousPage = () => setCurrentPage(currentPage - 1);

        8. Drag and drop functionality:
            const [isDragging, setIsDragging] = useState(false);
            const handleDragStart = () => setIsDragging(true);
            const handleDragEnd = () => setIsDragging(false);

        9. User authentication status:
            const [isAuthenticated, setIsAuthenticated] = useState(false);
            const login = () => setIsAuthenticated(true);
            const logout = () => setIsAuthenticated(false);

        10. Multi-step form navigation:
            const [currentStep, setCurrentStep] = useState(1);
            const goToNextStep = () => setCurrentStep(currentStep + 1);
            const goToPreviousStep = () => setCurrentStep(currentStep - 1);
            