import { motion } from 'framer-motion';

const Scooter = () => {
  return (
    <div className="relative w-full h-40 bg-gray-900 overflow-hidden">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        className="absolute w-1/3 h-full bg-gradient-to-r from-blue-500 to-blue-800"
      >
        <img src="/assets/images/footer-scooter.svg" alt="Moving Image" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};

export default Scooter;
