import { motion } from 'framer-motion'

export default function Sticker({ sticker }) {
    if (!sticker) { return; }

    const bgColor = sticker.bgColor || 'bg-purple-500';
    const shadowColor = sticker.shadowColor || 'shadow-pink-300';



    return (
        <motion.div
            className={`w-40 h-40 ${bgColor} rounded-xl cursor-pointer flex items-center justify-center relative overflow-hidden shadow-lg ${shadowColor}`}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background pattern/texture (optional) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-white">
                {sticker.icon ? (
                    <div className="mb-2">
                        {sticker.icon}
                    </div>
                ) : null}

                <h3 className="text-xl font-bold text-center">
                    {sticker.name}
                </h3>
            </div>

            {/* Hover effect overlay */}
            <motiondiv
                className="absolute inset-0 bg-white/5 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            />
        </motion.div>
    )
}